import React from 'react';
import './YourComponent.css'; // Import your CSS file

const YourComponent = () => {
  return (
    <div className="checkbox-outside-card">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheck"
      />
      <label className="custom-control-label" htmlFor="customCheck">
        Your Label
      </label>
    </div>
  );
};

export default YourComponent;