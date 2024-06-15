export class EnumConstants {
	static CONTEUDO_TIPOS = {
		EVENTO: {
			ID: 1,
			ROUTE: "eventos",
			TIPO: "Evento",
		},
		ATIVIDADE: {
			ID: 2,
			ROUTE: "atividades",
			TIPO: "Atividade",
		},
		RECOMENDACAO: {
			ID: 3,
			ROUTE: "recomendacoes",
			TIPO: "Recomendação",
		},
		ESPACO: {
			ID: 4,
			ROUTE: "espacos",
			TIPO: "Espaço",
		},
	};

	static ESTADOS = {
		EM_ANALISE: 1,
		APROVADO: 2,
		REJEITADO: 3,
	};

	static getTipoIdByRoute = (route) => {
		for (const key in EnumConstants.CONTEUDO_TIPOS) {
			if (EnumConstants.CONTEUDO_TIPOS[key].ROUTE === route) {
				return EnumConstants.CONTEUDO_TIPOS[key].ID;
			}
		}
		return null;
	};
}
