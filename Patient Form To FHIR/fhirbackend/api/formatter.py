from fhir.resources.patient import Patient
from fhir.resources.address import Address
from fhir.resources.humanname import HumanName


class ConvertToFHIR:
    def patient_resource(self, validated_data):
        name = HumanName.construct(
            given=[validated_data["first_name"]], family=validated_data["last_name"]
        )

        address = None
        if (
            "city" in validated_data
            or "state" in validated_data
            or "country" in validated_data
        ):
            address = Address.construct(
                city=validated_data["city"],
                state=validated_data["state"],
                postalCode=validated_data["postalcode"],
                country=validated_data["country"],
            )

        fhir_patient = Patient.construct(
            name=[name],
            gender=validated_data["gender"],
            birthDate=validated_data["birth_date"],
            address=[address] if address else None,
        )

        return fhir_patient.dict()
