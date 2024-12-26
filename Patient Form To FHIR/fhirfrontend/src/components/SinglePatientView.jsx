import React from "react";

function SinglePatient({ patient }) {
  const telecomNumber =
    patient?.telecom?.[0]?.value || patient?.telecom?.[1]?.value || "N/A";

  return (
    <div className="patient-view-container">
      <h3 className="patient-detail">ID: {patient?.id || "N/A"}</h3>
      <h3 className="patient-detail">
        Given Name: {patient?.name?.[0]?.given?.[0] || "N/A"}
      </h3>
      <h3 className="patient-detail">
        Family Name: {patient?.name?.[0]?.family || "N/A"}
      </h3>
      <h3 className="patient-detail">
        Birth Date: {patient?.birthDate || "N/A"}
      </h3>
      <h3 className="patient-detail">
        Full Address:{" "}
        {patient?.address?.[0]?.line?.[0]
          ? `${patient.address[0].line[0]},
          ${patient.address[0].city},
          ${patient.address[0].state},
          ${patient.address[0].postalCode},
          ${patient.address[0].country}`
          : "N/A"}
      </h3>
      <h3 className="patient-detail">Telecom Number: {telecomNumber}</h3>
      <h3 className="patient-detail">Diagnosis:</h3>
      <h3 className="patient-detail">Time of admission:</h3>
      <h3 className="patient-detail">Current Treatment:</h3>
    </div>
  );
}

export default SinglePatient;
