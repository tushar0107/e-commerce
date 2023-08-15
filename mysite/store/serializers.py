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
    image_url = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = '__all__'
    def get_image_url(self, Product):
        if Product.image:
            return Product.image.url
        return None
    