from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(write_only=True, max_length=128)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"], password=validated_data["password"]
        )
        return user


class PatientSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    gender = serializers.ChoiceField(choices=["male", "female", "other", "unknown"])
    birth_date = serializers.CharField()
    city = serializers.CharField(max_length=200, required=True)
    state = serializers.CharField(max_length=200, required=True)
    country = serializers.CharField(max_length=200, required=True)
    postalcode = serializers.CharField(max_length=20, required=True)
    phone_number = serializers.CharField(max_length=20, required=True)
    phone_number_use = serializers.ChoiceField(
        choices=["home", "work", "mobile", "other"], required=True
    )
