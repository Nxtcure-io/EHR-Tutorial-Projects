import React from "react";
import { useLocation } from "react-router-dom";
import SinglePatient from "../components/SinglePatientView";

function PatientDetail() {
  const location = useLocation();
  const { patient } = location.state || {};

  if (!patient) {
    return <p>No Patient detail available!</p>;
  }

  return (
    <div>
      <SinglePatient patient={patient} />
    </div>
  );
}

export default PatientDetail;
