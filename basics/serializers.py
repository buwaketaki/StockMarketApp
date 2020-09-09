from rest_framework import serializers 
from .models import Historical_stock_prices, Recently_Updated_Records, All_Records_Table
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model= All_Records_Table
        fields ="__all__"

class UpdatedDataSerializer(serializers.ModelSerializer):
    class Meta:
        model= Recently_Updated_Records
        fields ="__all__"
class HistoryDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Historical_stock_prices
        fields = "__all__"
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('id','username','password')
    