from django.contrib.auth.models import User, Group
from store.models import Product
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'first_name', 'last_nanme', 'email', 'groups' ]

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = [ 'url', 'name' ]

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        # fields = ['pk', 'prod_name','prod_desc','prod_price', 'prod_image','category']
        fields = '__all__'
    
    