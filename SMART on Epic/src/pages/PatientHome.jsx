// PatientPage.jsx
import { useState, useEffect } from "react";
import { getPatientDetails, getPatientMedications } from "../api/fhirQueryFunctions";
import PatientDetails from '../components/PatientDetails';
import Navbar from "../components/NavBar";

function PatientPage() {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const patient = await getPatientDetails();
            const medications = await getPatientMedications();
            console.log(medications)
            setDetails(patient);
        };
        fetchDetails();
    }, []); 

    return (
        <div>
            <Navbar/>
            <PatientDetails details={details} />
        </div>
    );
}

export default PatientPage;