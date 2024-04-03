import { useMemo, useState, useContext, createContext } from "react";
import { Loading } from "layouts/loading/Loading";



export const LoadingContext = createContext();


export const useLoading = () => {
	return useContext(LoadingContext);
};


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