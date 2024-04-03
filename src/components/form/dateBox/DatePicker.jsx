import React, { useState } from "react";

export function DatePicker({ label }) {
	const [selectedDate, setSelectedDate] = useState("");

	const handleDateChange = (e) => {
		setSelectedDate(e.target.value);
	};

	return (
		<>
			{label && <label htmlFor="inputImage">{label}</label>}

			<input type="date" value={selectedDate} onChange={handleDateChange} className="form-control" />
		</>
	);
}
