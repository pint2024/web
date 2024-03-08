import React, { useEffect, useState } from "react";

import Icon from "components/icons/icon";
export const CaixaTexto = ({ setValue, value, label, type, prefix, placeholder, disabled, handleKeyDown }) => {
	const [inputType, setInputType] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	useEffect(() => {
		setInputType(type);
	}, [type]);

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
					type={inputType !== "password" ? inputType : isPasswordVisible ? "text" : "password"}
					className="form-control"
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onKeyDown={(e) => handleInputKeyDown(e)}
				/>
				<span className="show__pass" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
					{inputType === "password" ? (
						value !== "" ? (
							isPasswordVisible ? (
								<Icon iconName="OutlineEyeSlash" />
							) : (
								<Icon iconName="OutlineEye" />
							)
						) : (
							""
						)
					) : (
						""
					)}
				</span>
			</div>
		</>
	);
};
