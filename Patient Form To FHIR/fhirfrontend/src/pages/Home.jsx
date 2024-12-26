import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientList from "../components/PatientList";
import api from "../api";

function Home() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = () => {
    api
      .get("api/patients/")
      .then((res) => res.data)
      .then((data) => {
        const patientData = data.entry.map((entry) => entry.resource);
        setPatients(patientData);
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to fetch patients");
        setLoading(false);
      });
  };

  const deletePatient = (id) => {
    api
      .delete(`api/patients/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Patient successfully deleted");
          setPatients((prevPatients) =>
            prevPatients.filter((patient) => patient.id !== id)
          );
        } else {
          alert("Failed to delete patient");
        }
      })
      .catch((err) => alert("An error occurred while deleting the patient"));
  };

  return (
    <div>
      <div>
        <button
          className="create-patient-btn"
          onClick={() => navigate("/create_patient")}
        >
          Create Patient
        </button>
      </div>
      <div>
        {loading ? (
          <p>Loading patients...</p>
        ) : patients.length > 0 ? (
          patients.map((patient) => (
            <PatientList
              patient={patient}
              onDelete={deletePatient}
              key={patient.id}
            />
          ))
        ) : (
          <p>No patients found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
