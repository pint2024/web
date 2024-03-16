import React, { useState } from "react";
import "./checkBox.css";

export function CheckBox({ label }) {
	const [isChecked, setIsChecked] = useState(true);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<label className="check-box remove-user-select">
			<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
			<span className="check-mark"></span>
			{label}
		</label>
	);
}
