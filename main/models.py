from django.db import models
from django.contrib.auth.models import User

# Modelos aquí
class CustomUser(models.Model):
    name = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    age = models.IntegerField()
    gender = models.CharField(max_length=40, choices=[('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')])
    email = models.EmailField(max_length=40)
    cellphone = models.CharField(max_length=15) 
    procedence = models.CharField(max_length=40)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Restaurante(models.Model):
    name = models.CharField(max_length=40, null=False)
    description = models.TextField(null=False)
    image = models.ImageField(upload_to='images/', null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  

    def __str__(self):
        return self.name

class NicaFood(models.Model):
    name = models.CharField(max_length=40, null=False)
    description = models.TextField(null=False)
    image = models.ImageField(upload_to='images/', null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class RestauranteNicaFood(models.Model):
    restaurante = models.ForeignKey(Restaurante, on_delete=models.CASCADE)
    nica_food = models.ForeignKey(NicaFood, on_delete=models.CASCADE)
    price = models.FloatField(null=False)

    class Meta:
        unique_together = ('restaurante', 'nica_food') 

    def __str__(self):
        return f'{self.restaurante.name} - {self.nica_food.name} (Precio: {self.price})'
