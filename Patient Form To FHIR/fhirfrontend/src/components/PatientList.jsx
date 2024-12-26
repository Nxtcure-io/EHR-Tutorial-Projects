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

  return (
    <div className="patient-list-container">
      <p className="patient-id" onClick={patientDetail}>
        ID: {patient.id}
      </p>
      <p className="patient-name" onClick={patientDetail}>
        Given Name: {givenName}
      </p>
      <p className="patient-number" onClick={patientDetail}>
        Telecom Number: {telecomNumber}
      </p>
      <p className="patient-diagnosis" onClick={patientDetail}>
        Diagnosis:
      </p>
      <button className="edit-patient" onClick={updatePatient}>
        EDIT
      </button>
      <button className="delete-patient" onClick={() => onDelete(patient.id)}>
        DELETE
      </button>
    </div>
  );
}

export default PatientList;
