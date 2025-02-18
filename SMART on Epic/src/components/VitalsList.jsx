import React from "react";
import '../styles/PatientVitals.css';

// Render the vitals list
function VitalsList({ details }) {
    if (!details) return <p>Loading patient vitals...</p>;

    // Extract the entries from the FHIR response
    const entries = details?.entry || [];

    // If there are no entries, display a message indicating no results
    if (entries.length === 0) {
        return <p>No vital signs found.</p>;
    }

    // Group vitals by date
    const vitalsByDate = entries.reduce((acc, entry) => {
        const observation = entry?.resource;
        if (!observation || observation.resourceType !== "Observation") return acc;

        const date = observation?.effectiveDateTime
            ? new Date(observation.effectiveDateTime).toLocaleDateString()
            : "Unknown Date";

        // Check for Blood Pressure and combine systolic and diastolic readings
        const code = observation?.code?.text || "Unknown Vital Sign";
        let value = "N/A";
        let unit = observation?.valueQuantity?.unit || "";

        if (code.toLowerCase().includes("blood pressure")) {
            // Find systolic and diastolic values
            const systolic = observation?.component?.find(c => c.code?.text === "Systolic blood pressure");
            const diastolic = observation?.component?.find(c => c.code?.text === "Diastolic blood pressure");

            if (systolic && diastolic) {
                value = `${systolic.valueQuantity.value} / ${diastolic.valueQuantity.value}`;
                unit = systolic.valueQuantity.unit?.replace(/\[|\]/g, ""); // Remove square brackets from the unit
            }
        } else {
            value = observation?.valueQuantity?.value ?? "N/A";
        }

        // Group by date
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push({ code, value, unit });

        return acc;
    }, {});

    // Render vitals grouped by date in a table format
    return (
        <div className="vitals-list">
            <h3>Patient Vitals Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Vital Sign</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(vitalsByDate).map((date, index) => (
                        <React.Fragment key={date}>
                            <tr>
                                <td rowSpan={vitalsByDate[date].length}>{date}</td>
                                <td>{vitalsByDate[date][0].code}</td>
                                <td>{vitalsByDate[date][0].value} {vitalsByDate[date][0].unit}</td>
                            </tr>
                            {vitalsByDate[date].slice(1).map((vital, i) => (
                                <tr key={`${date}-vital-${i}`}>
                                    <td>{vital.code}</td>
                                    <td>{vital.value} {vital.unit}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default VitalsList;