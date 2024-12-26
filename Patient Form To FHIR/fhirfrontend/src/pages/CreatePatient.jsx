import React from "react";
import PatientForm from "../components/PatientForm";

function CreatePatient() {
  // Write POST Logic

  return (
    <div>
      <PatientForm method={"create"} onSubmit={handleCreatePatient} />
    </div>
  );
}

export default CreatePatient;
