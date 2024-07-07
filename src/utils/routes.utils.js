import { EnumConstants } from "data/enum.constants";
import { NotFound } from "layouts/errors/NotFound";
import React from "react";
import { Route } from "react-router-dom";
import { Rotas } from "routes";

export class RoutesUtils {
	constructor(user_role) {
		this.user_role = user_role;
	}

	criarRoutes = (routes, parentRoute = "") => {
		return routes.map((route, index) => {
			const isAdmin = this.user_role === EnumConstants.ROLES.ADMIN.ID;
			const temPerfilDefinido = route.perfis && route.perfis.length > 0 && route.perfis.includes(this.user_role);
			const naoTemPerfilDefinido = !route.perfis || route.perfis.length === 0;

			const temAcesso = temPerfilDefinido || naoTemPerfilDefinido || isAdmin;

			return (
				<React.Fragment key={index}>
					<Route key={index} path={parentRoute + route.path} element={temAcesso ? route.element : <NotFound />} />
					{route.children && this.criarRoutes(route.children, parentRoute + route.path)}
				</React.Fragment>
			);
		});
	};

	static findRouteByPath(path) {
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

		return findRecursive([...Rotas.FrontofficeRoutes, ...Rotas.BackofficeRoutes], path);
	}
}
