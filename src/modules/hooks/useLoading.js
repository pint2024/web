import { useContext, useState, useMemo } from "react";
import { LoadingContext } from "custom/providers/loadingProvider";


export const useLoading = () => {
	return useContext(LoadingContext);
};
