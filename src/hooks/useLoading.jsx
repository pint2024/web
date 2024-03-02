import { useContext, useState, useMemo } from "react";
import { LoadingContext } from "../contexts/loadingContext";
import Loading from "../components/loading/loading";


export const useLoading = () => {
	return useContext(LoadingContext);
};
