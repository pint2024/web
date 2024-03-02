import { createContext, useMemo, useState } from "react";
import Loading from "../components/loading/loading";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
	const [isLoading, setisLoading] = useState(false);

	const startLoading = () => {
		setisLoading(true);
	};

	const stopLoading = () => {
		setisLoading(false);
	};

	const createLoading = useMemo(() => {
		return <>{isLoading && <Loading />}</>;
	}, [isLoading]);

	return (
		<LoadingContext.Provider value={{ isLoading, setisLoading, startLoading, stopLoading }}>
			{createLoading}
			{children}
		</LoadingContext.Provider>
	);
};
