from django.contrib import admin
from main import models

# Register your models here.

admin.site.register(models.CustomUser)
admin.site.register(models.Restaurant)
admin.site.register(models.foodtype)
admin.site.register(models.NicaFood)
admin.site.register(models.Menu)
