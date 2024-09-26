from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from main import views

router = routers.DefaultRouter()
router.register(r'food', views.NicaFoodView, 'food')

urlpatterns = [
    path('food/', include(router.urls)),
    path('docs/', include_docs_urls(title='GPS Gastronomy API')),
]
