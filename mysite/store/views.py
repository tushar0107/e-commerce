from django.shortcuts import render, redirect
from django.http import HttpResponse

from .models import *
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, auth

# Create your views here.

def home(request):
    #to display the home page
    return render(request,'home.html')


@login_required(login_url="login/")
def profile(request):
    #to go to profile page of the user
    pass

#user login form
def user_login(request):
    #gets form input only if the form action method is POST
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request,username=username,password=password)
        #this function works only if user is not logged in 
        if user is not None:
            login(request,user)
            print("logged in")
            messages.success(request,'Logged In')
            return redirect('home')
        else:
            messages.warning(request,'Invalid Credentials. Try again.')
        return redirect('home')

#user registration form
def signup(request):
    #gets form input only if the form action method is POST
    if request.method == 'POST':
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password = request.POST['password']
        username = request.POST['username']

        #checks if email is already registered or not,
        #if already registred email found, it sends a message and redirects to login
        if User.objects.filter(email=email).exists():
            messages.warning(request,'Email already registered. Login or try another email.')
            return redirect('user_login')
        
        #checks if username is already registered or not,
        #if already registred username found, it sends a message and redirects to login
        if User.objects.filter(username=username).exists():
            messages.warning(request, 'Username has been used already, Try Logging in.')
            return redirect('user_login')
        #if all credentials are valid a user object is created
        else:
            user = User.objects.create_user(
                username=username,
                password=password,
                
            )
            user.save()
            # user = auth.authenticate(request,username=username,password=password)    #to save the new user object
            login(request,user)  #to log in the new user
            messages.success(request,"Congrats🎉!! Your are a new member to us.😉")
            return redirect('home')

def products(request):
    #fetch out the products from the database with the filter
    search_product = request.GET['product']
    products_list = Product.objects.filter(prod_name__contains=str(search_product))
    products_list = list(products_list)
    if len(products_list)!=0:
        #counts the number of products found in the database
        num_of_products = len(products_list)
        return render(request,'products.html',{'products':products_list,'num_of_products':num_of_products,'search':search_product})

    else:
        #returns nothing if no products found with the relevant name
        num_of_products = 'No'
        return render(request, 'products.html',{'num_of_products':num_of_products})

def products_by_category(request):
    #fetch products from the database wy filtering through categories
    pass

def create_order(request):
    pass


def user_logout(request):
    #to logout the user
    logout(request)
    messages.info(request,"Logged Out.")
    return redirect('home')

def delete_account(request):
    #to delete the user account
    try:
        username = request.user.username
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        user.delete()
        messages.success(request,"User deleted. Redirecting you to home.")
        return redirect(request,'home')
    except User.DoesNotExist:
        messages.error(request,"User does not exists.")
        return redirect(request,'home')