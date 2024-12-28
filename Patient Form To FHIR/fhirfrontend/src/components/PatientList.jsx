import React from "react";
import { useNavigate } from "react-router-dom";

function PatientList({ patient, onDelete }) {
  const navigate = useNavigate();

  const patientDetail = () => {
    navigate("/patient_detail", { state: { patient } });
  };

  const updatePatient = () => {
    navigate("/update_patient", { state: { patient } });
  };

  const givenName =
    patient.name && patient.name[0] && patient.name[0].given
      ? patient.name[0].given[0]
      : "N/A";

  const telecomNumber =
    patient.telecom && patient.telecom[0] && patient.telecom[0].value
      ? patient.telecom[0].value
      : patient.telecom && patient.telecom[1] && patient.telecom[1].value
      ? patient.telecom[1].value
      : "N/A";
  const nameStyle = {
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div className="patient-list-container">
      <p className="patient-id" onClick={patientDetail} style={nameStyle}>
        ID: {patient.id}
      </p>
      <p className="patient-name" onClick={patientDetail} style={nameStyle}>
        Given Name: {givenName}
      </p>
      <p className="patient-number" onClick={patientDetail} style={nameStyle}>
        Telecom Number: {telecomNumber}
      </p>
      <p
        className="patient-diagnosis"
        onClick={patientDetail}
        style={nameStyle}
      >
        Diagnosis:
      </p>
      <button
        className="edit-patient"
        onClick={updatePatient}
        style={nameStyle}
      >
        EDIT
      </button>
      <button className="delete-patient" onClick={() => onDelete(patient.id)}>
        DELETE
      </button>
    </div>
  );
}

export default PatientList;
