from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/products/',views.ProductList.as_view({'get': 'list'}),name='product search'),
    path('api/product/<int:pk>/',views.ProductView.as_view({'get': 'list'}),name='product search'),
    
    path('', views.index, name='index page from react'),
    path("user_login", views.user_login, name="login for user"),
    path("prod/", views.products, name="products page"),
    path("profile", views.profile, name="profile page"),
    path("signup", views.signup, name="sign up page"),
    path("user_logout", views.user_logout, name="user logout"),
    path("delete_account", views.delete_account, name="delete user account"),

]
urlpatterns = format_suffix_patterns(urlpatterns)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)