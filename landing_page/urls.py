from django.urls import path
from .views import LandingPage
urlpatterns = [
    path('home', LandingPage.as_view()),
]
