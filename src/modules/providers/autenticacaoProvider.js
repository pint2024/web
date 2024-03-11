import { AutenticacaoRequest } from "api/autenticacaoRequest";
import { AutenticacaoContext } from "modules/contexts/autenticacaoContext";
import { useEffect, useState } from "react";
import { log } from "utils/logUtils";

export const AutenticacaoProvider = ({ children }) => {
	const [userData, setUserData] = useState(false);

	useEffect(() => {
		const getUserData = async () => {
			try {
				const data = await AutenticacaoRequest.getCurrentUser();
				setUserData(data);
			} catch (error) {
				log.erro("Error fetching user data:", error);
			}
		};
		getUserData();
	}, []);

	return <AutenticacaoContext.Provider value={userData}>{children}</AutenticacaoContext.Provider>;
};
