from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

from .models import *
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, auth

from django.contrib.auth.models import User, Group
from rest_framework import viewsets, generics, filters
from store.serializers import ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django.views.decorators.csrf import csrf_exempt

from .filters import ProductFilter
from .serializers import ProductSerializer

from rest_framework.decorators import action
from rest_framework.response import Response

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get_queryset(self):
        input = self.request.query_params.get('search')
        if input is not None:
            query = self.queryset.filter(prod_name__contains=input)
        return query
        

class ProductList(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    # filter_backends = [filters.SearchFilter]
    # filterset_class = ProductFilter
    def get_queryset(self):
        queryset = Product.objects.all()
        input = self.request.query_params.get('search')
        if input is not None:
            queryset = queryset.filter(product__prod_name=input)
        return queryset


class ProductSearchFilter():
    pass
# Create your views here.

def index(request):
    context = {}
    return render(request, 'index.html', context)

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
    products_list = Product.objects.filter(prod_name__contains=search_product)
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