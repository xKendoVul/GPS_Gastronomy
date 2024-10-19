from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from main import views
from django.urls import path, include, re_path
from .views import login, register, profile

router = routers.DefaultRouter()
router.register(r'food', views.NicaFoodView, 'food')

urlpatterns = [
    path('food/', include(router.urls)),
    re_path('login/', login),
    re_path('register/', register),
    re_path('profile/', profile),
    path('docs/', include_docs_urls(title='GPS Gastronomy API')),
]
