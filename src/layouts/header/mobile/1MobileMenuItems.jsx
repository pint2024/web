import { useState } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./1MobileDropdown";

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
	const [dropdown, setDropdown] = useState(false);

	const closeDropdown = () => {
		dropdown && setDropdown(false);
		showMenu && setShowMenu(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	return (
		<li className="menu-items" onClick={closeDropdown}>
			{items.route && items.submenu ? (
				<>
					<button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}>
						<Link to={items.route} onClick={closeDropdown}>
							{items.title}
						</Link>
						<div onClick={(e) => toggleDropdown(e)}>
							{dropdown ? <span className="arrow-close" /> : <span className="arrow" />}
						</div>
					</button>
					<MobileDropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
				</>
			) : !items.route && items.submenu ? (
				<>
					<button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}>
						{items.title}{" "}
						<div onClick={(e) => toggleDropdown(e)}>
							{dropdown ? <span className="arrow-close" /> : <span className="arrow" />}
						</div>
					</button>
					<MobileDropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
				</>
			) : (
				<Link to={items.route}>{items.title}</Link>
			)}
		</li>
	);
};

export default MobileMenuItems;
