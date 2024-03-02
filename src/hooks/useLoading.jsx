import { useContext, useState, useMemo } from "react";
import { LoadingContext } from "hooks/loadingContext";


export const useLoading = () => {
	return useContext(LoadingContext);
};
