import React, { useEffect, useState } from "react";
import { Icon } from "components/icons/icon";
import { LOG } from "utils/log.utils";

export const CaixaTexto = ({ handleChange, value, label, type, prefix, placeholder, disabled, handleKeyDown }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [getvalue, setValue] = useState("");

	useEffect(() => {
		setValue(value);
	}, []);

	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (typeof variavel === "function") handleKeyDown();
		}
	};

	const handleInputChange = (e) => {
		setValue(e.target.value);
		try {
			console.log(e.target.value);
			handleChange(e.target.value);
		} catch (error) {
			LOG.erro(error);
		}
	};

	console.log(value);

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
					onChange={(e) => handleInputChange(e)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onKeyDown={(e) => handleInputKeyDown(e)}
				/>
			</div>
		</>
	);
};
