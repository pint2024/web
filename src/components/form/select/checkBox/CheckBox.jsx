import React, { useState } from "react";
import "./checkBox.css";
import { isEmpty } from "utils/utils";

export function CheckBox({ label, checked, handleChange }) {
	const [isChecked, setIsChecked] = useState(true);

	const handleCheckboxChange = (e) => {
		setIsChecked(!isChecked);
		if (isEmpty(handleChange)) return;
		handleChange(e);
	};

	return (
		<label className="check-box remove-user-select">
			<input type="checkbox" checked={checked} onChange={(e) => handleCheckboxChange(e)} />
			<span className="check-mark"></span>
			{label}
		</label>
	);
}