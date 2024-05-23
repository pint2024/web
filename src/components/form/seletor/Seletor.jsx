import React, { useState } from "react";
import "./seletor.css";

export function Seletor() {
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
