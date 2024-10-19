from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import NicaFood, CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'username']

class foodSerializer(serializers.ModelSerializer):
    class Meta:
        model = NicaFood
        fields = '__all__'