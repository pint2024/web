import React from "react";

export function AddMarginTop({ children }) {
	const elementosComMargin = React.Children.map(children, (child) => {
		return <div className="mt-3">{child}</div>;
	});

	return <>{elementosComMargin}</>;
}
