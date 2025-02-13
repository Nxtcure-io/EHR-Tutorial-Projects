import React from "react";
import "../styles/PatientDetails.css"

// Render the patient detail list
function PatientDetailsList({ details }) {
    if (!details) return <p>Loading patient details...</p>;

    // Extract relevant data
    const fullName = details.name?.[0]?.text || "N/A";
    const birthDate = details.birthDate || "N/A"; 
    const gender = details.gender ? details.gender.charAt(0).toUpperCase() + details.gender.slice(1) : "N/A";
    const epicId = details.identifier?.find(id => id.type.text === "EPIC")?.value || "N/A";

    return (
        <div className="patient-card">
            <h2>Patient Details</h2>
            <div className="patient-info">
                <p><strong>Full Name:</strong> {fullName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>EPIC ID:</strong> {epicId}</p>
                <p><strong>Date of Birth:</strong> {birthDate}</p> 
            </div>
        </div>
    );
}

export default PatientDetailsList;