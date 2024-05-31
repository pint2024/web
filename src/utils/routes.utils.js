import { Route } from "react-router-dom";
import { Routes } from "routes";

const criarRoutes = (route, parentRoute = "") => {
	return route.map((route, index) => (
		<>
			<Route key={index} path={parentRoute + route.path} element={route.element} />
			{route.children && criarRoutes(route.children, parentRoute + route.path)}
		</>
	));
};

export const renderRoutes = criarRoutes([
	...Routes.InicialRoutes,
	...Routes.ConteudoRoutes,
	...Routes.CalendarioRoutes,
	...Routes.UtilizadorRoutes,
	...Routes.AutenticacaoRoutes,
	...Routes.ErrosRoutes,
]);

export const renderDashboardRoutes = criarRoutes([...Routes.DashboardRoutes]);

export function findRouteByPath(path) {
	const findRecursive = (routes, currentPath) => {
		for (const route of routes) {
			if (route.path === currentPath || route.path.split("/:")[0] === currentPath) {
				return route;
			} else if (route.children) {
				const childRoute = findRecursive(route.children, currentPath);
				if (childRoute) {
					return childRoute;
				}
			}
		}
		return null;
	};

	return findRecursive(
		[
			...Routes.InicialRoutes,
			...Routes.ConteudoRoutes,
			...Routes.CalendarioRoutes,
			...Routes.UtilizadorRoutes,
			...Routes.AutenticacaoRoutes,
			...Routes.ErrosRoutes,
		],
		path
	);
}
