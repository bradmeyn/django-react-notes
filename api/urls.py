import imp
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('', views.Routes.as_view(), name='routes'),
    path('notes/', views.NoteList.as_view(), name='notes'),
    path('notes/<str:pk>', views.NoteDetail.as_view(), name='note')
]

urlpatterns = format_suffix_patterns(urlpatterns)