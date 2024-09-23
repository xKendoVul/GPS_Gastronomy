from django.shortcuts import render

# views.py

from django.http import JsonResponse
from . models import NicaFood, RestauranteNicaFood

def buscar_restaurantes_por_platillo(request, platillo_name):
    platillo = NicaFood.objects.filter(name__icontains=platillo_name).first()

    if platillo:
        restaurantes_con_precios = RestauranteNicaFood.objects.filter(nica_food=platillo)
        resultados = [
            {
                'restaurante': item.restaurante.name,
                'price': item.price,
                'description': item.nica_food.description
            }
            for item in restaurantes_con_precios
        ]
        return JsonResponse({'restaurantes': resultados})
    else:
        return JsonResponse({'mensaje': 'No se encontró el platillo.'})
