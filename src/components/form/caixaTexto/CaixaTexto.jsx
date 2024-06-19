import React from "react";

export function CaixaTexto({ label = "", prefix = false, value, handleChange, ...props }) {
	return (
		<>
			{label && <label htmlFor="inputNome">{label}</label>}
			<div className="input-group">
				{prefix && (
					<span className="input-group-text" id="basic-addon">
						{prefix}
					</span>
				)}
				<input className="form-control" value={value} onChange={(e) => handleChange(e.target.value)} {...props} />
			</div>
		</>
	);
};
