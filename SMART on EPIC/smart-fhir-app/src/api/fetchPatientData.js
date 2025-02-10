const fetchPatientData = async (accessToken, fhirBaseUrl) => {
    try {
        const response = await fetch(`${fhirBaseUrl}/Patient`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Accept": "application/fhir+json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch patient details");
        }

        const data = await response.json();

        // Extract patient details
        const patient = data.entry?.[0]?.resource;
        console.log(patient)
        return patient || null;
    } catch (error) {
        console.error("Error fetching patient data:", error);
        return null;
    }
};

export default fetchPatientData;