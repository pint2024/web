import { useMemo, useState } from "react";
import Loading from "components/loading/loading";
import { LoadingContext } from "modules/contexts/loading.context";

export const LoadingProvider = ({ children }) => {
	const [isLoading, setisLoading] = useState(false);

	const startLoading = () => {
		setisLoading(true);
	};

	const stopLoading = () => {
		setisLoading(false);
	};

	const setLoading = (estado) => {
		setisLoading(estado);
	};

	const createLoading = useMemo(() => {
		return <>{isLoading && <Loading />}</>;
	}, [isLoading]);

	return (
		<LoadingContext.Provider value={{ isLoading, setisLoading, startLoading, stopLoading, setLoading }}>
			{createLoading}
			{children}
		</LoadingContext.Provider>
	);
};
