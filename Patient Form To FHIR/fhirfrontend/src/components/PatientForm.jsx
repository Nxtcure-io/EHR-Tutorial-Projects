import React, { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/PatientForm.css";

function PatientForm({ patient, method }) {
  const name = method === "update" ? "Update" : "Create";

  const navigate = useNavigate();

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
        id: patient.id,
        first_name: patient?.name?.[0]?.given?.[0] || "",
        last_name: patient?.name?.[0]?.family || "",
        gender: patient?.gender || "",
        birth_date: patient?.birthDate || "",
        city: patient.address?.[0]?.city || "",
        state: patient.address?.[0]?.state || "",
        country: patient.address?.[0]?.country || "",
        postalcode: patient.address?.[0]?.postalCode || "",
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
        .put(`api/patients/${formData.id}/`, formData)
        .then((res) => {
          if (res.status === 200) {
            alert("Patient deatils updated successfully!");
            navigate("/home");
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
            navigate("/home");
          } else {
            alert("Error creating patient");
          }
        })
        .catch((err) => alert(`Creation failed: ${err.message}`));
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{name} Patient</h2>
      <div className="form-group">
        <label htmlFor="first_name">First Name:</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last Name:</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="birth_date">Birth Date (YYYY-MM-DD):</label>
        <input
          id="birth_date"
          type="text"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input
          id="state"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input
          id="country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="postalcode">Postal Code:</label>
        <input
          id="postalcode"
          type="text"
          name="postalcode"
          value={formData.postalcode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone_number">Phone Number:</label>
        <input
          id="phone_number"
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone_number_use">Phone Number Use:</label>
        <select
          id="phone_number_use"
          name="phone_number_use"
          value={formData.phone_number_use}
          onChange={handleChange}
          required
        >
          <option value="">Select Use</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      <button type="submit" className="form-submit-btn">
        {name}
      </button>
    </form>
  );
}

export default PatientForm;
