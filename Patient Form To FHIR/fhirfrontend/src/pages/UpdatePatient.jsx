import React from "react";
import PatientForm from "../components/PatientForm";
import { useLocation } from "react-router-dom";

function UpdatePatient() {
  const location = useLocation;
  const { patient } = location.state;

  // Write PUT Logic

  return (
    <div>
      <PatientForm
        data={patient}
        method={"update"}
        onSubmit={handleUpdatePatient}
      />
    </div>
  );
}

export default UpdatePatient;
