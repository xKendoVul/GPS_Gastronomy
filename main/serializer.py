from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import NicaFood

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class foodSerializer(serializers.ModelSerializer):
    class Meta:
        model = NicaFood
        fields = '__all__'