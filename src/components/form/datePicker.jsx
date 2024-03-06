import React, { useState } from "react";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="datePicker">Select a Date:</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
}

export { DatePicker };


