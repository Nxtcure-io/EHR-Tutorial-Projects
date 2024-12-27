import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PatientSearch({ patients }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = patients.filter((patient) => {
      const name =
        patient.name?.[0]?.text ||
        `${patient.name?.[0]?.given?.[0] || ""} ${
          patient.name?.[0]?.family || ""
        }`.trim();

      const phone1 = patient.telecom?.[0]?.value || "";
      const phone2 = patient.telecom?.[1]?.value || "";

      return (
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone1.includes(searchQuery) ||
        phone2.includes(searchQuery)
      );
    });
    setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search patients by name or phone number"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredPatients.length > 0
          ? filteredPatients.map((patient) => {
              const name =
                patient.name?.[0]?.text ||
                `${patient.name?.[0]?.given?.[0] || ""} ${
                  patient.name?.[0]?.family || ""
                }`.trim();
              const phone1 = patient.telecom?.[0]?.value || "N/A";
              const phone2 = patient.telecom?.[1]?.value || "N/A";

              return (
                <li key={patient.id}>
                  <strong
                    onClick={() =>
                      navigate("/patient_detail", { state: { patient } })
                    }
                  >
                    Name:
                  </strong>{" "}
                  {name} <br />
                  <strong>Gender:</strong> {patient.gender} <br />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default PatientSearch;
