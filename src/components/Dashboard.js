import React, { useState } from "react";
import "../App.css";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Age: ${age}, File: ${file?.name}`);
  };

  const ageOptions = Array.from({ length: 101 }, (_, i) => i);

  return (
    <div className="dashboard">
      <h1>Healthcare Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Age:
          <select value={age} onChange={(e) => setAge(e.target.value)} required>
            <option value="" disabled>
              Select Age
            </option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>
        <label>
          File Upload:
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
