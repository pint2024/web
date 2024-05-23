const navItems = [
	{ title: "Conteudos", route: "/conteudos" },
	{ title: "Calendário", route: "/calendario" },
	{ title: "Dashboard", route: "/dashboard" },
];

export const userItems = [
	{ nome: "Minha conta", rota: `/conta/1` },
	{ nome: "Editar conta", rota: `/conta/1/editar` },
	{ nome: "Terminar sessão", rota: `/terminar-sessao` },
];

const criarObjeto = (data, parentRoute = null) => {
	return data.map((item) => ({
		title: item.title,
		route: parentRoute ? parentRoute + item.route : item.route,
		submenu: item.submenu ? criarObjeto(item.submenu, parentRoute ? parentRoute + item.route : item.route) : undefined,
	}));
};

export const menuItemsData = criarObjeto(navItems);
