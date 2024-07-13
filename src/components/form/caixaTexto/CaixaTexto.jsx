import { Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";
import React from "react";

export function CaixaTexto({
	label = "",
	prefix = false,
	value,
	className,
	onKeyUp,
	isInvalid = false,
	handleChange,
	handleSubmit,
	...props
}) {
	const handleSubmitEvent = (e) => {
		if (e.key === "Enter") {
			handleSubmit(e);
		}
	};
	return (
		<div className={className}>
			{label && (
				<label htmlFor="inputNome">
					{label}
					{isInvalid ? "*" : ""}
				</label>
			)}
			<div className="input-group">
				{prefix && (
					<span className="input-group-text" id="basic-addon">
						{prefix}
					</span>
				)}
				<input
					className={`form-control ${isInvalid ? "form-is-invalid" : ""}`}
					value={value}
					onChange={(e) => handleChange(e)}
					onKeyUp={onKeyUp ? (e) => onKeyUp(e) : (e) => handleSubmitEvent(e)}
					{...props}
				/>
			</div>
			{isInvalid ? (
				<Texto size={COMMON_SIZES.FS0} type={COMMON_TYPES.PERIGO}>
					{isInvalid}
				</Texto>
			) : null}
		</div>
	);
}
