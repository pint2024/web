import React, { useState } from "react";
import "./switchToggle.css";

export function SwitchToggle() {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<label className="toggle-switch">
			<input type="checkbox" checked={isChecked} onChange={handleChange} />
			<span className="slider" />
		</label>
	);
}
