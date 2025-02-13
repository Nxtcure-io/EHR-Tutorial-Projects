// PatientPage.jsx
import { useState, useEffect } from "react";
import { getPatientDetails, getPatientMedications, getPatientObservation } from "../api/fhirQueryFunctions";
import Navbar from "../components/NavBar";
import PatientDetailsList from "../components/PatientDetails";

// The Patient info page
function PatientPage() {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const patient = await getPatientDetails();
            setDetails(patient);
    
            const medications = await getPatientMedications();
            const observations = await getPatientObservation();

            // Debug statement for the other details
            console.log('medication:', medications)
            console.log('observation:', observations)
            
        };
        fetchDetails();
    }, []); 

    return (
        <div>
            <Navbar/>
            <PatientDetailsList details={details} />
        </div>
    );
}

export default PatientPage;