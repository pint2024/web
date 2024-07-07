import { AutenticacaoRequest } from "api";
import { useEffect, useState } from "react";

export const useUserValidation = (shouldReturnIsValid = false) => {
	const [userData, setuserData] = useState({});
	const [isValid, setisValid] = useState(false);

	useEffect(() => {
		getUserData();
	}, []);

	const getUserData = async () => {
		try {
			const data = await AutenticacaoRequest.obterUtilizadorAtual();
			if (!data) setisValid(true);
			setuserData(data);
			setisValid(true);
		} catch (error) {
			setisValid(false);
			console.error("Error fetching user data:", error);
		}
	};

	return shouldReturnIsValid ? { userData, isValid } : userData;
};
