const navItems = [
	{
		title: "Atividades",
		route: "/atividade",
		submenu: [
			{
				title: "Saúde",
				route: "/saude",
				submenu: [
					{ title: "Hospitais", route: "/hospitais" },
					{ title: "Clinicas", route: "/clinicas" },
					{ title: "Centro de Saude", route: "/centro-de-saude" },
					{ title: "Farmacias", route: "/farmacias" },
					{ title: "Clinicas Veterinarias", route: "/clinicas-veterinarias" },
				],
			},
			{
				title: "Desporto",
				route: "/desporto",
				submenu: [
					{ title: "Ginasio", route: "/ginasio" },
					{ title: "Complexos Desportivos", route: "/complexos-desportivos" },
					{ title: "Desporto em Equipa", route: "/habitacao" },
					{ title: "Lojas de Desporto", route: "/lojas-desporto" },
				],
			},
			{
				title: "Formação",
				route: "/formacao",
				submenu: [
					{ title: "Escolas", route: "/escolas" },
					{ title: "Universidades", route: "/universidades" },
					{ title: "Escolas Superiores", route: "/escolas-superiores" },
					{ title: "Creches", route: "/creches" },
					{ title: "Escolas Primarias", route: "/escolas-primarias" },
				],
			},
			{
				title: "Gastronomia",
				route: "/gastronomia",
				submenu: [
					{ title: "Restaurante", route: "/restaurante" },
					{ title: "Fast Food", route: "/fast-food" },
					{ title: "Bares", route: "/bares" },
				],
			},
			{
				title: "Habitação",
				route: "/habitacao",
				submenu: [
					{ title: "Quartos", route: "/quartos" },
					{ title: "Casas", route: "/casas" },
					{ title: "Hoteis", route: "/hoteis" },
					{ title: "Alojamentos Locais", route: "/alojamentos-locais" },
				],
			},
			{
				title: "Mobilidade",
				route: "/mobilidade",
				submenu: [
					{ title: "Transportes", route: "/transportes" },
					{ title: "Paragens", route: "/Paragens" },
				],
			},
			{
				title: "Lazer",
				route: "/lazer",
				submenu: [
					{ title: "Pontos Turisticos", route: "/pontos-turisticos" },
					{ title: "Bilhetes", route: "/bilhetes" },
					{ title: "Parques", route: "/parques" },
				],
			},
		],
	},
	{ title: "Conversa", route: "/conversa" },
	{ title: "Calendário", route: "/calendario" },
];

const criarObjeto = (data, parentRoute = null) => {
	console.log('criarObjeto');
	return data.map((item) => ({
		title: item.title,
		route: parentRoute
			? parentRoute + item.route
			: item.route,
		submenu: item.submenu 
			? criarObjeto(item.submenu, parentRoute 
				? parentRoute + item.route 
				: item.route) 
			: undefined,
	}));
}

export const menuItemsData = criarObjeto(navItems);
