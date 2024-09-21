from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    age = models.IntegerField()
    gender = models.CharField(max_length=40, choices=[('M', 'Masculino'), ('F', 'Femenino')])
    email = models.EmailField(max_length=40)
    cellphone = models.IntegerField()
    procedence = models.CharField(max_length=40)
    password =models.FloatField(max_length=50)
    
    