import axios from "axios";
import { CONFIG } from "../config/config";

// Get the info about the patient from FHIR
export async function getPatientDetails() {
    const access_token = localStorage.getItem("access_token");
    const patient_id = localStorage.getItem("patient_id");

    try {
        const res = await axios.get(`${CONFIG.FHIR_BASE_URL}/Patient/${patient_id}`, {
            headers: { "Authorization": `Bearer ${access_token}` }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching patient details:", error.response ? error.response.data : error.message);
    }
}

// Get medication info about Patients from FHIR
export async function getPatientMedications() {
    const access_token = localStorage.getItem("access_token");
    const patient_id = localStorage.getItem("patient_id");

    try {
        const res = await axios.get(`${CONFIG.FHIR_BASE_URL}/MedicationRequest`, {
            params: { 
                subject: patient_id
            },

            headers: { 
                "Authorization": `Bearer ${access_token}` 
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching medication details:", error.response ? error.response.data : error.message);
    }
}

// Get lab observation info about Patients from FHIR
export async function getPatientObservation() {
    const access_token = localStorage.getItem("access_token");
    const patient_id = localStorage.getItem("patient_id");

    try {
        const res = await axios.get(`${CONFIG.FHIR_BASE_URL}/Observation`, {
            params: { 
                subject: patient_id,
                category: "laboratory",
                _count: '1',
            },

            headers: { 
                "Authorization": `Bearer ${access_token}` 
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching lab observation details:", error.response ? error.response.data : error.message);
    }
}

// Get vitals info about Patients from FHIR
export async function getPatientVitals() {
    const access_token = localStorage.getItem("access_token");
    const patient_id = localStorage.getItem("patient_id");

    try {
        const res = await axios.get(`${CONFIG.FHIR_BASE_URL}/Observation`, {
            params: { 
                subject: patient_id,
                category: "vital-signs",
            },

            headers: { 
                "Authorization": `Bearer ${access_token}` 
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching vitals details:", error.response ? error.response.data : error.message);
    }
}