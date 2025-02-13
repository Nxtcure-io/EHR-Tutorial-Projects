import { setWellKnown } from "../config/config";
import axios from "axios";

async function getWellKnown(){
    try{
        const res = await axios.get('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/.well-known/smart-configuration')
        const data = res.data
        // Set the variables to use in other files
        setWellKnown(
            data.authorization_endpoint, 
            data.token_endpoint,
            data.issuer,  
        );
        
    }catch(error){
        console.error(error.message)
    }
};

export default getWellKnown