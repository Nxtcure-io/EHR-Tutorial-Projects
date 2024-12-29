from fhir.resources.patient import Patient
from fhir.resources.address import Address
from fhir.resources.humanname import HumanName
from fhir.resources.contactpoint import ContactPoint


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

        telecom_construct = ContactPoint.construct(
            system="phone",
            value=validated_data["phone_number"],
            use=validated_data["phone_number_use"],
        )

        fhir_patient = Patient.construct(
            name=[name],
            telecom=[telecom_construct],
            gender=validated_data["gender"],
            birthDate=validated_data["birth_date"],
            address=[address] if address else None,
        )
        print(name, telecom_construct)
        return dict(fhir_patient.dict())
