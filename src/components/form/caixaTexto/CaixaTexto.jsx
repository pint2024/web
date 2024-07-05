import { Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";
import React from "react";

export function CaixaTexto({ label = "", prefix = false, value, className, isInvalid = false, handleChange, ...props }) {
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
