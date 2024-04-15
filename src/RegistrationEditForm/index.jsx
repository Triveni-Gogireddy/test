import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RegistrationEditForm = () => {
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

  const id= useParams().id
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
  const editpatientdetails = async (e) => {
    e.preventDefault();
    const id= e.target.value;
    console.log(id)
    
  }
  

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/patientregistration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const responseData = await response.json();
//       console.log('Form data submitted:', responseData);
//       setFormData({
//         fullName: '',
//         age: '',
//         gender: '',
//         contact: '',
//         address: '',
//         email: '',
//         medicalConditions: ''
//       });
//       fetchPatientList();
//     } catch (error) {
//       console.error('Error submitting form data:', error);
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch(`http://localhost:3001/patientsupdate/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Form data updated:', responseData);
      // Optionally, you can redirect the user to another page or perform any other action
    } catch (error) {
      console.error('Error updating form data:', error);
    }
  };


  


  const fetchPatientList = async () => {
   try{
    const response = await fetch(`http://localhost:3001/Patient/${id}`);
   if(response.ok){
  const data= await response.json();
  console.log(data)
  setFormData(data[0])
   }
}
   catch(err){
    console.log(err)
   }
  };



  return (
    <div>
        {/* <p>{id}</p> */}
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
          <button type="submit">Update</button>
        </div>
      </form>

      {/* <h2>Patients List:</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            Name: {patient.fullName}, Age: {patient.age}, Gender: {patient.gender}, Contact: {patient.contact}, Address: {patient.address}, Email: {patient.email}, Medical Conditions: {patient.medicalConditions}
            <button onClick={editpatientdetails} value={patient.id}>Edit</button>
          </li>
          
        ))}
      </ul> */}
      
    </div>
  );
};

export default RegistrationEditForm;
