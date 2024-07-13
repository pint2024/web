import { EnumConstants } from "data/enum.constants";

const navItems = [
	{ title: "Conteudos", icon: "Star", selectedIcon: "StarFill", route: "/conteudos", perfil: [EnumConstants.ROLES.USER] },
	{ title: "Calendário", icon: "Calendar", selectedIcon: "CalendarFill", route: "/calendario", perfil: [EnumConstants.ROLES.USER] },
	{
		title: "Backoffice",
		icon: "PersonBadge",
		selectedIcon: "PersonBadgeFill",
		route: "/backoffice",
		perfil: [EnumConstants.ROLES.ADMIN]
	},
	{ title: "Sobre", icon: "InfoCircle", selectedIcon: "InfoCircleFill", route: "/sobre", perfil: [] },
];

export const userItems = [
	{ nome: "Minha conta", rota: `/conta/1` },
	{ nome: "Terminar sessão", rota: `/terminar-sessao` },
];

const criarObjeto = (data, parentRoute = null) => {
	return data.map((item) => ({
		title: item.title,
		icon: item.icon,
		perfil: item.perfil,
		selectedIcon: item.selectedIcon,
		route: parentRoute ? parentRoute + item.route : item.route,
		submenu: item.submenu ? criarObjeto(item.submenu, parentRoute ? parentRoute + item.route : item.route) : undefined,
	}));
};

export const menuItemsData = criarObjeto(navItems);
