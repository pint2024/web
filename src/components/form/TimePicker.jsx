import React, { useState } from "react";

export function TimePicker() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  return (
    <div>
      <label htmlFor="startTimePicker">Start Time:</label>
      <input
        type="time"
        id="startTimePicker"
        value={startTime}
        onChange={handleStartTimeChange}
        className="form-control"
      />
      <label htmlFor="endTimePicker">End Time:</label>
      <input
        type="time"
        id="endTimePicker"
        value={endTime}
        onChange={handleEndTimeChange}
        className="form-control"
      />
    </div>
  );
}