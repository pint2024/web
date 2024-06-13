import { useContext } from "react";
import { LoadingContext } from "context/loadingContext";

export const useCarregando = () => {
	return useContext(LoadingContext);
};
