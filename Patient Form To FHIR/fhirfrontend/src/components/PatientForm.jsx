import React, { useState, useEffect } from "react";

function PatientForm({ patient, method, onSubmit }) {
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
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Postal Code</label>
        <input
          type="text"
          name="postalcode"
          value={formData.postalcode}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Phone Number Use</label>
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

      <button type="submit">Submit</button>
    </form>
  );
}

export default PatientForm;
