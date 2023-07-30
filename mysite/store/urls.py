from django.urls import path

from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.home, name="home"),
    path("user_login", views.user_login, name="login for user"),
    path("products/", views.products, name="products page"),
    path("profile", views.profile, name="profile page"),
    path("signup", views.signup, name="sign up page"),
    path("user_logout", views.user_logout, name="user logout"),
    path("delete_account", views.delete_account, name="delete user account"),

]