import React, { useState } from "react";

export function ComboBox({
	title,
	options,
	handleChange,
	value: propValue = "",
	disabled = false,
	placeholder = '-'
}) {
	const [value, setValue] = useState(propValue);

	const handleSelectChange = (e) => {
		setValue(e.target.value);
		if (typeof handleChange === 'function') {
			handleChange(e);
		}
	};

	return (
		<div className="ComboBox">
			{title && <label htmlFor="selectOption">{title}</label>}
			<select
				className="form-select"
				id="selectOption"
				onChange={handleSelectChange}
				value={value}
				disabled={disabled}
			>
				<option value="placeHolder">{placeholder}</option>
				{options?.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}