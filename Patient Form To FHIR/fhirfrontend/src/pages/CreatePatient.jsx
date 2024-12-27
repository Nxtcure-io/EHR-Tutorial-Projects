import React from "react";
import PatientForm from "../components/PatientForm";

function CreatePatient() {
  return (
    <div>
      <PatientForm method={"create"} />
    </div>
  );
}

export default CreatePatient;
