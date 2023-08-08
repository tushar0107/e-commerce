from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.index, name='index page from react'),
    path('api/product-search/',views.ProductView.as_view({'get': 'list'}),name='product search'),
    
    path("user_login", views.user_login, name="login for user"),
    path("products/", views.products, name="products page"),
    path("profile", views.profile, name="profile page"),
    path("signup", views.signup, name="sign up page"),
    path("user_logout", views.user_logout, name="user logout"),
    path("delete_account", views.delete_account, name="delete user account"),

]
urlpatterns = format_suffix_patterns(urlpatterns)