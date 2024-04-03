import { menuItemsData } from "./headerData";
import MenuItems from "./HeaderItems";

const Navbar = () => {
	const depthLevel = 0;

	return (
		<nav className="desktop-nav">
			<ul className="menus d-flex">
				{menuItemsData.map((item, index) => {
					return <MenuItems items={item} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
