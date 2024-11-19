import React, { useState, useRef } from 'react';
import Navbar from './Navbar'; 
import './Dashboard.css'; 

const Dashboard = () => {
  // State to manage the name, age, and file data
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);

  // Reference for the file input to clear it after form submission
  const fileInputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData to send data as multipart/form-data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('file', file);

    // Log the form data (for testing)
    console.log('Form submitted:', { name, age, file });

    // Reset form fields after submission
    setName('');
    setAge('');
    setFile(null);

    // Clear the file input field using ref
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <Navbar />  {/* Include the Navbar component */}
      <div className="dashboard-container">
        <h2>Healthcare Dashboard</h2>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="label">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
                required
                placeholder="Enter Your Name"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label className="label">Age:</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)} // Update age state
                required
                className="input-field"
              >
                <option value="">Select Age</option>
                {/* Create age options from 1 to 100 */}
                {[...Array(100).keys()].map((age) => (
                  <option key={age} value={age + 1}>
                    {age + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="label">Upload File:</label>
              <input
                type="file"
                ref={fileInputRef} // Attach the ref to reset the file input
                onChange={(e) => setFile(e.target.files[0])} // Update file state
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
