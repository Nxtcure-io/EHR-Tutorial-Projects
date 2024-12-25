from django.urls import path
from . import views

urlpatterns = [
    path("patients/", views.PatientListCreate.as_view(), name="patients"),
    path(
        "patients/<int:id>/", views.PatientDetailView.as_view(), name="patient_detail"
    ),
    path(
        "patients/<str:name>/", views.PatientDetailView.as_view(), name="patient_detail"
    ),
    path("patients/search/", views.PatientSearchView.as_view(), name="patient_search"),
]
