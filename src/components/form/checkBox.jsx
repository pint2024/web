import React from "react";

export const CheckBox = () => {
	return (
		<div className="checkbox-outside-card">
			<input type="checkbox" className="custom-control-input" id="customCheck" />
			<label className="custom-control-label" htmlFor="customCheck">
				Your Label
			</label>
		</div>
	);
};
