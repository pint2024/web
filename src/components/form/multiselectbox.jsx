import React, { useState } from "react";

export const MultiSelectBox = ({ options, onChange }) => {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionToggle = (option) => {
		const isSelected = selectedOptions.includes(option);
		let newSelectedOptions;

		if (isSelected) {
			newSelectedOptions = selectedOptions.filter((item) => item !== option);
		} else {
			newSelectedOptions = [...selectedOptions, option];
		}

		setSelectedOptions(newSelectedOptions);
		onChange(newSelectedOptions);
	};

	return (
		<div className="dropdown">
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedOptions.length > 0 ? selectedOptions.join(", ") : "Selecione"}
			</button>
			<div className={`dropdown-menu${isOpen ? " show" : ""}`} aria-labelledby="dropdownMenuButton">
				{options.map((option, index) => (
					<div key={index} className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value={option}
							id={`option-${index}`}
							checked={selectedOptions.includes(option)}
							onChange={() => handleOptionToggle(option)}
						/>
						<label className="form-check-label" htmlFor={`option-${index}`}>
							{option}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};
