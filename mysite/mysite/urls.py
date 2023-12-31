"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from store import views

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'product', views.ProductView)
router.register(r'products', views.ProductList)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include("store.urls")),
    path('api/',include(router.urls)),
    path('get-csrf-token/', views.get_csrf_token, name='get-csrf-token'),
    path('api/login/', views.LoginView.as_view(),name="login"),
    path('api-token-auth/', views.CustomAuthToken.as_view()),
    path('api/register/', views.RegisterUser.as_view(), name="user Registration"),
    path('api/create-customer/', views.RegisterUser.as_view(), name="create-customer"),
]