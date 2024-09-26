from django.urls import path, include
from rest_framework import routers
from main import views

router = routers.DefaultRouter()
router.register(r'food', views.NicaFoodView, 'food')

urlpatterns = [
    path('food/', include(router.urls)),
]
