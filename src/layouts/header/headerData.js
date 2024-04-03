const navItems = [
	{
		title: "Área de Testes",
		icon: "Tools",
		route: "/teste",
		submenu: [{ title: "Rei", route: "/rei" }],
	},
	{ title: "Atividades", icon: "EnvelopeFill", route: "/atividade" },
	{ title: "Conversa", icon: "ChatDotsFill", route: "/conversa" },
	{ title: "Calendário", icon: "CalendarFill", route: "/calendario" },
	{ title: "Dashboard", icon: "LockFill", route: "/dashboard" },
];

export const userItems = [
	{ nome: "Minha conta", rota: `/conta/1` },
	{ nome: "Editar conta", rota: `/conta/1/editar` },
	{ nome: "Terminar sessão", rota: `/terminar-sessao` },
];

const criarObjeto = (data, parentRoute = null) => {
	return data.map((item) => ({
		title: item.title,
		icon: item.icon,
		route: parentRoute ? parentRoute + item.route : item.route,
		submenu: item.submenu ? criarObjeto(item.submenu, parentRoute ? parentRoute + item.route : item.route) : undefined,
	}));
};

export const menuItemsData = criarObjeto(navItems);
