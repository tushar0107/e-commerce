from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/products/',views.ProductList.as_view({'get': 'list'}),name='product search'),
    path('api/product/<int:pk>/',views.ProductView.as_view({'get': 'list'}),name='product search'),

]
urlpatterns = format_suffix_patterns(urlpatterns)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)