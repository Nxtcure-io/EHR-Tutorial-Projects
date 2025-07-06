// PatientPage.jsx
import { useState, useEffect } from "react";
import { getPatientDetails } from "../api/fhirQueryFunctions";
import Navbar from "../components/NavBar";
import PatientDetailsList from "../components/PatientDetails";

// The Patient info page
function PatientPage() {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const patient = await getPatientDetails();
            setDetails(patient);
            
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
