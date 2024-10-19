from rest_framework import viewsets
from .serializer import foodSerializer,UserSerializer
from .models import NicaFood

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from django.contrib.auth.models import User

@api_view(['POST'])
def login(request):
    
    user = get_object_or_404(User, username =  request.data['username'])
    
    if not user.check_password(request.data['password']):
        return Response({'error' : 'Invalid password'}, status = status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    
    return Response({"token": token.key, "user": serializer.data}, status = status.HTTP_200_OK)

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
          
        user = User.objects.get(username=serializer.data['username'])
        user.set_password(serializer.data['password'])
        user.save()
        
        token = Token.objects.create(user=user)
        return Response({'token' : token.key, 'user' : serializer.data}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    
    print(request.user)
    
    return Response("estas logeado como {}".format(request.user.username),status=status.HTTP_200_OK)

@api_view(['GET'])
def food_list(request):
    foods = NicaFood.objects.all()
    serializer = foodSerializer(foods, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def food_detail(request, pk):
    food = NicaFood.objects.get(id=pk)
    serializer = foodSerializer(food, many=False)
    return Response(serializer.data)