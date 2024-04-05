import React, { useEffect, useState } from "react";
import { LOG } from "utils/log.utils";

export const CaixaTexto = React.forwardRef(({ label = "", prefix = false, ...props }, ref) => {
	//console.log("CaixaTexto", props);

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
					className="form-control"
					{...props}
					ref={ref}
				/>
			</div>
		</>
	);
});
