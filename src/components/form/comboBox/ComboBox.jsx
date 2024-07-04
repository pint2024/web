import React, { useState } from "react";
import PropTypes from "prop-types";
import { Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";

ComboBox.propTypes = {
	label: PropTypes.string,
	options: PropTypes.object.isRequired,
	handleChange: PropTypes.func,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
};

export function ComboBox({
	label,
	options,
	handleChange,
	isInvalid,
	value: propValue = "",
	disabled = false,
	placeholder = "-",
}) {
	const [value, setValue] = useState(propValue);

	const handleSelectChange = (e) => {
		setValue(e.target.value);
		if (typeof handleChange === "function") {
			handleChange(e.target.value);
		}
	};

	return (
		<div className="ComboBox">
			{label && (
				<label htmlFor="selectOption">
					{label}
					{isInvalid ? "*" : ""}
				</label>
			)}
			<select
				className={`form-select ${isInvalid ? "form-is-invalid" : ""}`}
				id="selectOption"
				onChange={handleSelectChange}
				value={value}
				disabled={disabled}
			>
				<option value={0}>{placeholder}</option>
				{options?.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{isInvalid ? (
				<Texto size={COMMON_SIZES.FS0} type={COMMON_TYPES.PERIGO}>
					{isInvalid}
				</Texto>
			) : null}
		</div>
	);
}
