import { useState } from "react";
import Loading from "layouts/loading/loading";

let isLoading = false;
let setLoading;

const loading = (value) => {
	isLoading = value;
	if (setLoading) {
		setLoading(value);
	}
};

export const LoadingProvider = ({ children }) => {
	const [, forceUpdate] = useState();

	setLoading = (value) => {
		isLoading = value;
		forceUpdate(value);
	};

	const createLoading = isLoading && <Loading />;

	return (
		<>
			{createLoading}
			{children}
		</>
	);
};
