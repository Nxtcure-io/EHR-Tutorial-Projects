import '../styles/PatientLab.css';

function PatientLabList({ details }) {
    if (!details) return <p className="loading">Loading patient Labs...</p>;

    // Get the entries from the details object
    const labEntries = details?.entry || [];

    // If there are no valid lab entries, show an appropriate message
    if (labEntries.length === 0) return <p className="no-results">No lab results found.</p>;

    return (
        <div className="patient-lab-results">
            <h2>Patient Lab Results</h2>
            {labEntries.map((entry, index) => {
                // Check if the resource is of type "Observation" and valid
                const observation = entry?.resource;
                if (!observation || observation.resourceType !== "Observation") return null;

                // Extract relevant information from the Observation resource
                const testName = observation?.code?.text || "Unknown Test";
                const resultValue = observation?.valueQuantity?.value ?? "N/A";
                const unit = observation?.valueQuantity?.unit || "";
                const date = observation?.effectiveDateTime
                    ? new Date(observation.effectiveDateTime).toLocaleDateString()
                    : "Unknown Date";

                // Display the observation details within a card
                return (
                    <div key={observation.id || index} className="lab-card">
                        <p><strong>Test:</strong> {testName}</p>
                        <p><strong>Result:</strong> {resultValue} {unit}</p>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Encounter:</strong> {observation?.encounter?.display || "Unknown Encounter"}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default PatientLabList;