import { useState, useMemo } from "react";
import { Loading } from "layouts/loading/Loading";

export const useLoading = () => {
	const [isLoading, setisLoading] = useState(false);

	const startLoading = () => {
		setisLoading(true);
	};

	const stopLoading = () => {
		setisLoading(false);
	};

	const createLoading = useMemo(() => {
		return <div>{isLoading && <Loading />}</div>;
	}, [isLoading]);

	return { isLoading, setisLoading, startLoading, stopLoading, createLoading };
};
