import React from "react";
import "../styles/VitalsList.css";

function VitalsList({ details }) {
    if (!details || !details.resource) return <p>Loading patient vitals...</p>;

    const { resource } = details;
    const vitalName = resource.code?.text || "Unknown Vital";
    const practitioner = resource.performer?.[0]?.display || "Unknown Practitioner";
    const useCase = resource.encounter?.display || "Unknown Use Case";
    const date = resource.effectiveDateTime ? new Date(resource.effectiveDateTime).toLocaleString() : "N/A";

    // Limit vitals to 10
    const vitalsList = resource.component?.slice(0, 10) || [];

    return (
        <div className="vitals-container">
            <h2>{vitalName}</h2>
            <p className="vitals-date">Date: {date}</p>
            <table className="vitals-table">
                <thead>
                    <tr>
                        <th>Measurement</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {vitalsList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.code?.text || "Unknown"}</td>
                            <td>{item.valueQuantity?.value} {item.valueQuantity?.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><strong>Practitioner:</strong> {practitioner}</p>
            <p><strong>Use Case:</strong> {useCase}</p>
        </div>
    );
}

export default VitalsList;