from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    age = models.IntegerField(max_length=3)
    gender = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    cellphone = models.IntegerField(max_length=10)
    procedence = models.CharField(max_length=40)
    password =models.FloatField(max_length=50)
    
    