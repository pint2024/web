import React, { useState } from "react";
import PropTypes from "prop-types";

ComboBox.propTypes = {
	label: PropTypes.string,
	options: PropTypes.object.isRequired,
	handleChange: PropTypes.func,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
};

export function ComboBox({ label, options, handleChange, value: propValue = "", disabled = false, placeholder = "-" }) {
	const [value, setValue] = useState(propValue);

	const handleSelectChange = (e) => {
		setValue(e.target.value);
		if (typeof handleChange === "function") {
			handleChange(e);
		}
	};

	return (
		<div className="ComboBox">
			{label && <label htmlFor="selectOption">{label}</label>}
			<select className="form-select" id="selectOption" onChange={handleSelectChange} value={value} disabled={disabled}>
				<option value={0}>{placeholder}</option>
				{options?.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
