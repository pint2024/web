import AutenticacaoRequest from "api/autenticacaoRequest";
import { AutenticacaoContext } from "modules/contexts/autenticacao.context";
import { useEffect, useState } from "react";
import { LOG } from "utils/log.utils";

export const AutenticacaoProvider = ({ children }) => {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const getUserData = async () => {
			try {
				const data = await AutenticacaoRequest.obterUtilizadorAtual();
				setUserData(data);
			} catch (error) {
				LOG.erro("Error fetching user data:", error);
			}
		};
		getUserData();
	}, []);

	return <AutenticacaoContext.Provider value={userData}>{children}</AutenticacaoContext.Provider>;
};
