import { Link, useLocation } from "react-router-dom";
import { Icone, Texto } from "components/index";
import { useEffect, useState } from "react";
import { findRouteByPath } from "utils/routes.utils";
import { COMMON_TYPES } from "data/data";

export function Breadcrumb() {
	const [breadcrumbPath, setBreadcrumbPath] = useState([]);
	const location = useLocation();

	useEffect(() => {
		const setBreadcrumb = () => {
			const pathnames = location.pathname.split("/").filter((path) => path !== "");
			const breadcrumb = [];

			console.log("1", pathnames);

			for (const path of pathnames) {
				console.log("2", path);
				const route = findRouteByPath("/" + path);
				console.log("3", route);
				if (route) {
				console.log("3", route);
					breadcrumb.push(route);
				}
			}

			setBreadcrumbPath(breadcrumb);
		};

		setBreadcrumb();
	}, [location]);

	return (
		<section id="Breadcrumb" className="d-flex gap-2 align-items-center ms-3 breadcrumb-height">
			<Link to="/" className="d-flex align-items-center">
				<Icone iconName="HouseFill" size={0} type={COMMON_TYPES.SECUNDARIO} className="link-hover" />
			</Link>
			{breadcrumbPath.map((item, index) => (
				<div className="d-flex align-items-center gap-2" key={index}>
					<Texto size={0} type={COMMON_TYPES.SECUNDARIO}>
						{">"}
					</Texto>

					<Link to={item.path}>
						<Texto size={0} type={COMMON_TYPES.SECUNDARIO} className="link-hover underline-hover">
							{item.title}
						</Texto>
					</Link>
				</div>
			))}
		</section>
	);
}
