import React, { useState } from "react";

export function CaixaTexto({
	title,
	prefix = false,
	inputType = "text",
	handleChange = null,
	handleKeyDown = null,
	value = "",
	disabled = false,
	placeholder = "",
}) {
	const [stateValue, setstateValue] = useState(value);

	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleKeyDown();
			setstateValue("");
		}
	};

	const handleInputChange = (e) => {
		setstateValue(e.target.value);
		if (typeof handleChange === "function") {
			handleChange(e);
		}
	};

	return (
		<>
			{title && <label htmlFor="inputNome">{title}</label>}
			<div className="input-group">
				{prefix && (
					<span className="input-group-text" id="basic-addon">
						{prefix}
					</span>
				)}
				<input
					type={inputType}
					className="form-control"
					id="inputNome"
					onChange={(e) => handleInputChange(e)}
					value={stateValue}
					disabled={disabled}
					placeholder={placeholder}
					onKeyDown={(e) => handleInputKeyDown(e)}
				/>
			</div>
		</>
	);
}
