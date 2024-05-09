import React from "react";

export const TextBox = ({ label = "", prefix = false, ...props }) => {
	return (
		<>
			{label && <label htmlFor="inputNome">{label}</label>}
			<div className="input-group">
				{prefix && (
					<span className="input-group-text" id="basic-addon">
						{prefix}
					</span>
				)}
				<input className="form-control" {...props} />
			</div>
		</>
	);
};
