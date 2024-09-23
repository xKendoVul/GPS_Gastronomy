from django.contrib import admin
from main import models

# Register your models here.

admin.site.register(models.CustomUser)
admin.site.register(models.Restaurante)
admin.site.register(models.NicaFood)
admin.site.register(models.RestauranteNicaFood)
