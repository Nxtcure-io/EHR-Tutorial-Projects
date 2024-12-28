import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/PatientForm.css";

function PatientForm({ patient, method }) {
  const name = method === "update" ? "Update" : "Create";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    city: "",
    state: "",
    country: "",
    postalcode: "",
    phone_number: "",
    phone_number_use: "",
  });

  useEffect(() => {
    if (method === "update" && patient) {
      setFormData({
        first_name: patient?.name?.[0]?.given?.[0] || "",
        last_name: patient?.name?.[0]?.family || "",
        gender: patient?.gender || "",
        birth_date: patient?.birthDate || "",
        city: patient.address[0].city || "",
        state: patient.address[0].state || "",
        country: patient.address[0].country || "",
        postalcode: patient.address[0].postalCode || "",
        phone_number:
          patient?.telecom?.[0]?.value || patient?.telecom?.[1]?.value || "",
        phone_number_use: patient?.telecom?.[0]?.use || "",
      });
    }
  }, [method, patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === "update") {
      // Write PUT logic
      api
        .put(`patients/${formData.id}/`, formData)
        .then((res) => {
          if (res.status === 200) {
            alert("Patient details updated successfully!");
          } else {
            alert("Error updating patient details!");
          }
        })
        .catch((err) => alert(`Update failed: ${err.message}`));
    } else {
      // Write POST logic
      api
        .post("api/patients/", formData)
        .then((res) => {
          if (res.status === 201) {
            alert("Patient created successfully!");
          } else {
            alert("Error creating patient");
          }
        })
        .catch((err) => alert(`Creation failed: ${err.message}`));
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender: </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Birth Date (YYYY-MM-DD): </label>
            <input
              type="text"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City: </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>State: </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country: </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Postal Code: </label>
            <input
              type="text"
              name="postalcode"
              value={formData.postalcode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number: </label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number Use: </label>
            <select
              name="phone_number_use"
              value={formData.phone_number_use}
              onChange={handleChange}
            >
              <option value="">Select Use</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
        </div>

        <button type="submit">{name}</button>
      </form>
    </div>
  );
}

export default PatientForm;
