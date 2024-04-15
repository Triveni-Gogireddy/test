import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    contact: '',
    address: '',
    email: '',
    medicalConditions: ''
  });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatientList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const Navigate= useNavigate( );
  const editpatientdetails = async (e) => {
    e.preventDefault();
    const id= e.target.value;
    console.log(id)
    Navigate(`/edit/${id}`)
  }
  


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/patientregistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Form data submitted:', responseData);
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        contact: '',
        address: '',
        email: '',
        medicalConditions: ''
      });
      fetchPatientList();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const fetchPatientList = async () => {
    try {
      const response = await fetch('http://localhost:3001/PatientList');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patient list:', error);
    }
  };

  const deletepatientdetailes = async(e) =>{
    const id= e.target.value;
    console.log(id)
    try {
     const response = await fetch(`http://localhost:3001/patientdelete/${id}`, {
       method: 'Delete',
     });
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     const responseData = await response.json();
     console.log('Form data updated:', responseData);
   } catch (error) {
     console.error('Error updating form data:', error);
   }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Full Name: </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Gender: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label> Contact: </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Address: </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Medical Conditions: </label>
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h2>Patients List:</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            Name: {patient.fullName}, Age: {patient.age}, Gender: {patient.gender}, Contact: {patient.contact}, Address: {patient.address}, Email: {patient.email}, Medical Conditions: {patient.medicalcondition}
            <button onClick={editpatientdetails} value={patient.id}>Edit</button>
            <button onClick={deletepatientdetailes} value={patient.id}>Delete</button>
          </li>
          
        ))}
      </ul>
      
    </div>
  );
};

export default PatientRegistration;
