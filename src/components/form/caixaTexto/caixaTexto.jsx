import React, { useEffect, useState } from "react";
import { Icon } from "components/icons/icon";

export const CaixaTexto = ({ handleChange, value, label, type, prefix, placeholder, disabled, handleKeyDown }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleKeyDown();
		}
	};

	return (
		<>
			{label && <label htmlFor="inputNome">{label}</label>}
			<div className="input-group">
				{prefix && (
					<span className="input-group-text" id="basic-addon">
						{prefix}
					</span>
				)}
				<input
					type={type}
					className="form-control"
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					onChange={(e) => handleChange(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onKeyDown={(e) => handleInputKeyDown(e)}
				/>
			</div>
		</>
	);
};
