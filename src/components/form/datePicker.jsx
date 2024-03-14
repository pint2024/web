import React, { useState } from "react";

export function DatePicker() {
	const [selectedDate, setSelectedDate] = useState("");

	const handleDateChange = (e) => {
		setSelectedDate(e.target.value);
	};

	return <input type="date" value={selectedDate} onChange={handleDateChange} className="form-control" />;
}
