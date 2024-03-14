import { useContext } from "react";
import { LoadingContext } from "modules/contexts/loading.context";


export const useLoading = () => {
	return useContext(LoadingContext);
};
