import { useState, useEffect } from "react";
import fetchPatientData from "../api/fetchPatientData";

const PatientInfo = ({ accessToken, fhirBaseUrl }) => {
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const getPatientDetails = async () => {
            if (!accessToken || !fhirBaseUrl) return;
            const data = await fetchPatientData(accessToken, fhirBaseUrl);
            setPatient(data);
        };

        getPatientDetails();
    }, [accessToken, fhirBaseUrl]);

    if (!patient) return <p>Loading patient details...</p>;

    return (
        <div>
            <h2>Patient Information</h2>
            <p><strong>Name:</strong> {patient.name?.[0]?.given?.join(" ") || "N/A"} {patient.name?.[0]?.family || ""}</p>
            <p><strong>Gender:</strong> {patient.gender || "N/A"}</p>
            <p><strong>Birth Date:</strong> {patient.birthDate || "N/A"}</p>
        </div>
    );
};

export default PatientInfo;