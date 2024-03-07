import React, { useState } from "react";

export function DatePicker() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="startDatePicker">Start Date:</label>
      <input
        type="date"
        id="startDatePicker"
        value={startDate}
        onChange={handleStartDateChange}
        className="form-control"
      />
      <label htmlFor="endDatePicker">End Date:</label>
      <input
        type="date"
        id="endDatePicker"
        value={endDate}
        onChange={handleEndDateChange}
        className="form-control"
      />
    </div>
  );
}
