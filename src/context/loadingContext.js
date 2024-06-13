import { createContext } from "react";
import { useLoading } from "hooks/useLoading";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
	const { isLoading, setisLoading, startLoading, stopLoading, createLoading } = useLoading();

	return (
		<LoadingContext.Provider value={{ isLoading, setisLoading, startLoading, stopLoading, createLoading }}>
			{createLoading}
			{children}
		</LoadingContext.Provider>
	);
};
