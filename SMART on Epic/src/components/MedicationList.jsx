import React from "react";

// Render the medications list or warnings if no medications are found
function MedicationsList({ details }) {
    if (!details) return <p>Loading patient medications...</p>;

    // Check if there are any medication entries in the response
    const entries = details?.entry || [];

    // If no entries, show a message
    if (entries.length === 0) {
        const warning = details?.entry[0]?.resource?.issue?.map((issue, index) => (
            <div key={index}>
                <strong>{issue.severity.toUpperCase()}:</strong> {issue.diagnostics}
            </div>
        ));

        return (
            <div>
                <h3>No medication results found</h3>
                {warning}
            </div>
        );
    }

    // If entries exist, map through the data
    return (
        <div>
            <h3>Patient Medications</h3>
            {entries.map((entry, index) => {
                // Check for valid "MedicationRequest" resource
                const resource = entry?.resource;
                if (!resource || resource.resourceType !== "MedicationRequest") return null;

                // Render the details for each valid medication entry
                return (
                    <div key={index} className="medication-card">
                        <p><strong>Medication:</strong> {resource?.medicationCodeableConcept?.text || "Unknown Medication"}</p>
                        <p><strong>Status:</strong> {resource?.status || "Unknown Status"}</p>
                        <p><strong>Authored On:</strong> {resource?.authoredOn || "Unknown Date"}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default MedicationsList;