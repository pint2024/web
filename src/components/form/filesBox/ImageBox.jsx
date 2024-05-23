import { Imagem } from "components/index";
import React, { useState } from "react";

export function ImageBox({
	label,
	handleChange,
	value: propValue = "",
	disabled = false,
	placeholder = ''
}) {
	const [value, setValue] = useState(propValue);

	const handleInputChange = (e) => {
		setValue(e.target.files[0]);
		if (typeof handleChange === 'function') {
			handleChange(e);
		}
	};

	return (
		<div className="ImageBox">
			{label && <label htmlFor="inputImage">{label}</label>}
			<div className="input-group">
				<input
					type="file"
					className="form-control"
					id="inputImage"
					onChange={handleInputChange}
					disabled={disabled}
				/>
			</div>
			{value && (
				<Imagem
					src={URL.createObjectURL(value)}
					alt="Imagem selecionada"
					style={{ width: "100%", height: "auto" }}
				/>
			)}
		</div>
	);
}