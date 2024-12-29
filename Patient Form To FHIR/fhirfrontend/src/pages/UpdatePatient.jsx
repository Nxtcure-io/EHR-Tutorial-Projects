import React from "react";
import PatientForm from "../components/PatientForm";
import { useLocation } from "react-router-dom";

function UpdatePatient() {
  const location = useLocation();
  const { patient } = location.state;

  return (
    <div>
      <PatientForm patient={patient} method="update" />
    </div>
  );
}

export default UpdatePatient;
