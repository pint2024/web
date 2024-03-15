import React, { useState } from "react";
import "./checkBox.css";

export function CheckBox() {
	const [isChecked, setIsChecked] = useState(true);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<label className="custom-checkbox">
			<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
			<span className="checkmark"></span>
			Checkbox
		</label>
	);
}
