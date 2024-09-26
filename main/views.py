from rest_framework import viewsets
from .serializer import foodSerializer
from .models import NicaFood

class NicaFoodView(viewsets.ModelViewSet):
    serializer_class = foodSerializer
    queryset = NicaFood.objects.all()