import { AutenticacaoRequest } from "api";
import { useEffect, useState } from "react";

export const useUserValidation = () => {
	const [userData, setuserData] = useState({});
	const [isValid, setisValid] = useState({});

	useEffect(() => {
		getUserData();
	}, []);

	const getUserData = async () => {
		try {
			const data = await AutenticacaoRequest.obterUtilizadorAtual();
			if (!data) throw new Error("Data não existe.");
			setuserData(data);
			setisValid(true);
		} catch (error) {
			setisValid(false);
			console.error("Error fetching user data:", error);
		}
	};

	return userData;
};
