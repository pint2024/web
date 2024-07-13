import { Route, Navigate } from "react-router-dom";

import React from "react";
import { Rotas } from "routes";
import { Utils } from "./utils";

export class RoutesUtils {
	constructor(user_role) {
		this.user_role = user_role;
	}

	criarRoutes = (routes, parentRoute = "") => {
		return routes.map((route, index) => {
			const temAcesso = Utils.Perms(route.perfis, this.user_role);
			const element = temAcesso ? route.element : <Navigate to="/iniciar-sessao" />;

			return (
				<React.Fragment key={index}>
					<Route key={index} path={parentRoute + route.path} element={element} />
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
