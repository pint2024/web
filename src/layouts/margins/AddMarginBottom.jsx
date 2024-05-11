import React from "react";

export function AddMarginBottom({ children }) {
	const elementosComMargin = React.Children.map(children, (child) => {
		return <div className="mt-3">{child}</div>;
	});

	return <>{elementosComMargin}</>;
}
