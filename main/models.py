from django.db import models
from django.contrib.auth.models import AbstractUser

#usuarios
class CustomUser(AbstractUser):
    name = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    age = models.IntegerField()
    gender = models.CharField(max_length=40, choices=[('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')])
    cellphone = models.CharField(max_length=15) 
    procedence = models.CharField(max_length=40)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='CustomUser_set',  
    )
    
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='CustomUser_Permissions_set',
        blank=True
    )
    
    def __str__(self):
        return self.name

#Restaurantes
class Restaurant(models.Model):
    name = models.CharField(max_length=40, null=False)
    description = models.TextField(null=False)
    image = models.ImageField(upload_to='images/', null=False)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)  

    def __str__(self):
        return self.name

#Comida tipica
class NicaFood(models.Model):
    name = models.CharField(max_length=40, null=False)
    description = models.TextField(null=False)
    image = models.ImageField(upload_to='images/', null=False)

    def __str__(self):
        return self.name

#menu de restaurantes
class Menu(models.Model):
    restaurante = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    nica_food = models.ForeignKey(NicaFood, on_delete=models.CASCADE)
    price = models.FloatField(null=False)

    class Meta:
        unique_together = ('restaurante', 'nica_food') 

    def __str__(self):
        return f'{self.restaurante.name} - {self.nica_food.name} (Precio: {self.price})'

class comments(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    food = models.ForeignKey(NicaFood, on_delete=models.CASCADE)
    comment = models.TextField(null=False)

    def __str__(self):
        return f'{self.user.name} - {self.restaurant.name}'