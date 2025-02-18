import { useState, useEffect } from 'react';
import MedicationsList from '../components/MedicationList'
import { getPatientMedications } from '../api/fhirQueryFunctions';
import Navbar from '../components/NavBar'


function Medications(){

    const [details, setDetails] = useState(null);
    
        useEffect(() => {
            const fetchDetails = async () => {
                const medications = await getPatientMedications();
                setDetails(medications);
                console.log(medications)
                
            };
            fetchDetails();
        }, []); 

    return(
        <div>
            <Navbar/>
            <MedicationsList details={details}/>
        </div>
        
    )
}
export default Medications