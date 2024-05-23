import { menuItemsData } from "./headerData";
import MenuItems from "./HeaderItems";

export function Navbar() {
	const depthLevel = 0;

	return (
		<nav className="desktop-nav">
			<ul className="menus d-flex remove-padding">
				{menuItemsData.map((item, index) => {
					return <MenuItems items={item} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};
