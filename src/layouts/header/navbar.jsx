import { menuItemsData } from "./headerData";
import MenuItems from "./headerItems";

const Navbar = () => {
	const depthLevel = 0;

	return (
		<nav className="desktop-nav">
			<ul className="menus d-flex">
				{menuItemsData.map((item, index) => {
					console.log("y", item)
					return <MenuItems items={item} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
