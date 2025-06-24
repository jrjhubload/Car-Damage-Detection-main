from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
import json

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if User.objects.filter(username=email).exists():
            return JsonResponse({'error': 'User already exists'}, status=400)

        user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
        user.save()
        return JsonResponse({'message': 'User created successfully'}, status=201)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            #print(dict(request.session))
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logged out'})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@login_required
def check_auth(request):
    return JsonResponse({
        'authenticated': True,
        'username': request.user.username,
        'name': request.user.first_name,
    })