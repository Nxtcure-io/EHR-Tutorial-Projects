import axios from "axios";
import { CONFIG } from "../config/config";

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