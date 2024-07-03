const navItems = [
	{ title: "Conteudos", icon: "Star", selectedIcon: "StarFill", route: "/conteudos" },
	{ title: "Calendário", icon: "Calendar", selectedIcon: "CalendarFill", route: "/calendario" },
	{
		title: "Backoffice",
		icon: "PersonBadge",
		selectedIcon: "PersonBadgeFill",
		route: "/backoffice",
	},
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
		selectedIcon: item.selectedIcon,
		route: parentRoute ? parentRoute + item.route : item.route,
		submenu: item.submenu ? criarObjeto(item.submenu, parentRoute ? parentRoute + item.route : item.route) : undefined,
	}));
};

export const menuItemsData = criarObjeto(navItems);
