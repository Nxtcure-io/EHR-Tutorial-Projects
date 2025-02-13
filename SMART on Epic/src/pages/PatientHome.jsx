// PatientPage.jsx
import { useState, useEffect } from "react";
import { getPatientDetails } from "../api/getPatientDetails";
import PatientDetails from "../components/PatientDetails";
import Navbar from "../components/NavBar";

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
            <PatientDetails details={details} />
        </div>
    );
}

export default PatientPage;