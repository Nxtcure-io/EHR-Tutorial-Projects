from django.urls import path
from . import views

urlpatterns = [
    path("patients/", views.PatientListCreate.as_view(), name="patients"),
    path(
        "patients/<int:id>/", views.PatientDetailView.as_view(), name="patient_detail"
    ),
]
