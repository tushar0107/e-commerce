from django.contrib import admin
from .models import *

from rest_framework.authtoken.admin import TokenAdmin

# Register your models here.

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Payment)
admin.site.register(Wishlist)
admin.site.register(Review)
admin.site.register(Category)
admin.site.register(OrderItem)

TokenAdmin.raw_id_fields = ['user']