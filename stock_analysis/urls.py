
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token  
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Serve Single Page Application
indexpage = TemplateView.as_view(template_name='index.html')
urlpatterns = [
    path('auth/', obtain_auth_token),
    path('', include('basics.urls')),
    path('admin/', admin.site.urls),
    # url('api/', include('basics.urls'))
    # re_path('.*', indexpage)
]
