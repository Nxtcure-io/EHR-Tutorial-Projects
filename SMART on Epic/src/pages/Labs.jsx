import { useState, useEffect } from 'react';
import { getPatientObservation } from '../api/fhirQueryFunctions';
import PatientLabList from '../components/LabDetails';
import Navbar from '../components/NavBar'

function Labs(){

    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const labs = await getPatientObservation();
            setDetails(labs);
            
        };
        fetchDetails();
    }, []); 

    return (
        <div>
            <Navbar/>
            <PatientLabList details={details} />
        </div>
    );
}
export default Labs;