from fhir.resources.patient import Patient
from fhir.resources.address import Address
from fhir.resources.humanname import HumanName
from fhir.resources.contactpoint import ContactPoint


class ConvertToFHIR:
    def patient_resource(self, validated_data):
        # Create a HumanName resource
        name = HumanName(
            given=[validated_data.get("first_name", "")],
            family=validated_data.get("last_name", ""),
        )

        # Create an Address resource if address-related fields are provided
        address = None
        if any(
            key in validated_data for key in ["city", "state", "postalcode", "country"]
        ):
            address = Address(
                city=validated_data.get("city"),
                state=validated_data.get("state"),
                postalCode=validated_data.get("postalcode"),
                country=validated_data.get("country"),
            )

        # Create a ContactPoint resource for telecom details
        telecom_construct = ContactPoint(
            system="phone",
            value=validated_data.get("phone_number"),
            use=validated_data.get("phone_number_use", "home"),  # Default to 'home'
        )

        # Construct the Patient resource
        fhir_patient = Patient(
            name=[name],
            telecom=[telecom_construct],
            gender=validated_data.get("gender"),
            birthDate=validated_data.get("birth_date"),
            address=[address] if address else None,  # Include address only if present
        )

        # Return the Patient resource as a dictionary
        print(validated_data.get("birth_date"))
        return fhir_patient.dict()
