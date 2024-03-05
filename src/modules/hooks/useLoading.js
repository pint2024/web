import { useContext } from "react";
import { LoadingContext } from "modules/contexts/loadingContext";


export const useLoading = () => {
	return useContext(LoadingContext);
};
