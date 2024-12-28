import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PatientSearch({ patients }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const navigate = useNavigate();

  const patientDetail = (patient) => {
    navigate("/patient_detail", { state: { patient } });
  };

  const nameStyle = {
    cursor: "pointer",
    fontWeight: "bold",
  };

  useEffect(() => {
    if (searchQuery) {
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
    } else {
      setFilteredPatients([]);
    }
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
      {/* Only show the dropdown if there are filtered patients and searchQuery is not empty */}
      {searchQuery && filteredPatients.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: 0,
            border: "1px solid #ccc",
            maxHeight: "200px",
            overflowY: "auto",
            position: "absolute",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          {filteredPatients.map((patient) => {
            const name =
              patient.name?.[0]?.text ||
              `${patient.name?.[0]?.given?.[0] || ""} ${
                patient.name?.[0]?.family || ""
              }`.trim();
            const phone1 = patient.telecom?.[0]?.value || "N/A";
            const phone2 = patient.telecom?.[1]?.value || "N/A";

            return (
              <li
                key={patient.id}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                }}
                onClick={() => patientDetail(patient)}
              >
                <span style={nameStyle}>{name}</span>
                <br />
                <strong>Phone:</strong> {phone1 !== "N/A" ? phone1 : phone2}{" "}
                <br />
                <strong>Gender:</strong> {patient.gender}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PatientSearch;
