from django.urls import path
from rest_framework import routers
from .api import HistoryDataViewSet, UpdatedDataViewSet, DataViewSet
from . import views
from django.views.decorators.csrf import csrf_exempt
from .views import indexpage
router = routers.DefaultRouter()
router.register('api/data', DataViewSet, 'HistoryData')
router.register('api/recentdata',DataViewSet, 'RecentData')
router.register('api/historydata', HistoryDataViewSet, 'HistoryData')
# router.register((z'', views.index, name='index')
urlpatterns= [path('updatedData/', views.check_if_update_present),
path('scripData/<stock_name>/', views.details),
path('login/', views.Login),
path('data/<stock_name>/',csrf_exempt( views.check_recent_record.as_view())),
path('historicalData/<stock_name>/', views.check_historical_record),
path('', indexpage, name='index'),
path('details/', views.BasicDetails),
path('bhavcopy/',views.bhavcopy),
path('index/',views.index)
# path('getRecentInfo', views.check_recent_record)
]

    

urlpatterns += router.urls