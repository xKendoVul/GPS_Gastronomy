from django.db import models
from django.contrib.auth.models import User
import os
# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=40, null=False)
    lastname = models.CharField(max_length=40, null=False)
    age = models.IntegerField(max_length=3, null=False)
    gender = models.CharField(max_length=40. null=False)
    email = models.EmailField(max_length=40, null=False)
    cellphone = models.IntegerField(max_length=10, null=False)
    procedence = models.CharField(max_length=40, null=False)
    password =models.FloatField(max_length=50, null=False)

class NicaFood(models.Model):
    name = models.CharField(max_length=40, null=False)
    description = models.CharField(max_length=40, null=False)
    price = models.FloatField(max_length=50, null=False)
    image = models.ImageField(upload_to='images/')
    
# class Restaurant(models.Model):
#     name = models.CharField(max_length=40, null=False)
#     description = models.CharField(max_length=40, null=False)
#     location = models.CharField(max_length=40, null=False)
#     image = models.ImageField(upload_to='images/')
#     food = models.ForeignKey(NicaFood, on_delete=models.CASCADE)    
    