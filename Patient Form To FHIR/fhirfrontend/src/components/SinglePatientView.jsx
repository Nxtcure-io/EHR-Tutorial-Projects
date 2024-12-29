import React from "react";
import "../styles/SinglePatientView.css";

function SinglePatient({ patient }) {
  const telecomNumber =
    patient?.telecom?.[0]?.value || patient?.telecom?.[1]?.value || "N/A";

  return (
    <div className="patient-view-container">
      <h2 className="patient-title">Patient Details</h2>
      <div className="patient-details">
        <div className="detail-row">
          <span className="detail-label">ID:</span>
          <span className="detail-value">{patient?.id || "N/A"}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Given Name:</span>
          <span className="detail-value">
            {patient?.name?.[0]?.given?.[0] || "N/A"}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Gender:</span>
          <span className="detail-value">{patient?.gender || "N/A"}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Family Name:</span>
          <span className="detail-value">
            {patient?.name?.[0]?.family || "N/A"}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Birth Date:</span>
          <span className="detail-value">{patient?.birthDate || "N/A"}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Full Address:</span>
          <span className="detail-value">
            {patient?.address?.[0]?.line?.[0]
              ? `${patient.address[0].line[0]}, ${patient.address[0].city}, ${patient.address[0].state}, ${patient.address[0].postalCode}, ${patient.address[0].country}`
              : "N/A"}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Telecom Number:</span>
          <span className="detail-value">{telecomNumber}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Diagnosis:</span>
          <span className="detail-value">N/A</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Time of Admission:</span>
          <span className="detail-value">N/A</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Current Treatment:</span>
          <span className="detail-value">N/A</span>
        </div>
        <div>
          <button className="discharge-patient">DISCHARGE</button>
        </div>
      </div>
    </div>
  );
}

export default SinglePatient;
