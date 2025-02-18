import { useEffect, useState } from 'react';
import { getPatientVitals } from '../api/fhirQueryFunctions';
import VitalsList from '../components/VitalsList';
import Navbar from '../components/NavBar'


function Vitals() {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const vitals = await getPatientVitals();
            setDetails(vitals);
            
        };
        fetchDetails();
    }, []); 

    return (
        <div>
            <Navbar/>
            <VitalsList details={details} />
        </div>
    );
}

export default Vitals


