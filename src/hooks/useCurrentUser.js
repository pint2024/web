import { AutenticacaoRequest } from "api";
import { userProfile } from "data/userProfile";
import { useEffect, useState } from "react";

export const useCurrentUser = (shouldReturnIsValid = false) => {
	const [userData, setuserData] = useState({});
	const [isValid, setisValid] = useState(false);

	useEffect(() => {
		getUserData();
	}, []);

	const getUserData = async () => {
		try {
			const data = await AutenticacaoRequest.obterUtilizadorAtual();
			userProfile.setData(data);
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
