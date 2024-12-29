from django.urls import path, re_path
from . import views

urlpatterns = [
    path("patients/", views.PatientListCreate.as_view(), name="patients"),
    re_path(
        r"^patients/(?P<patient_id>[\w-]+)/$",
        views.PatientDetailView.as_view(),
        name="patient_detail",
    ),
    path("patients/search/", views.PatientSearchView.as_view(), name="patient_search"),
]
