from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import NicaFood

class foodSerializer(serializers.ModelSerializer):
    class Meta:
        model = NicaFood
        fields = '__all__'
