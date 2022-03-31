from django.urls import include, path, re_path
from . import views as v


urlpatterns = [
    path('', include('core.api.urls')),
]