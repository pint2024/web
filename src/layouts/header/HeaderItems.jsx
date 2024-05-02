import Dropdown from "./NavDropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "components/elementos";

const MenuItems = ({ items, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);
	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		setDropdown(true);
	};

	const onMouseLeave = () => {
		setDropdown(false);
	};

	const toggleDropdown = () => {
		setDropdown((prev) => !prev);
	};

	const closeDropdown = () => {
		dropdown && setDropdown(false);
	};

	return (
		<li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
			{items.submenu ? (
				<>
					<Link
						className="d-flex align-items-center gap-2 link"
						aria-haspopup="menu"
						aria-expanded={dropdown ? "true" : "false"}
						onClick={() => toggleDropdown()}
						to={items.route ? items.route : null}
					>
						{items.title}
						{depthLevel > 0 ? (
							<Icon iconName="CaretRightFill" className="header-submenu-arrow icon-inverse" />
						) : (
							<Icon iconName="CaretDownFill" className="header-menu-arrow icon-inverse" />
						)}
					</Link>
					<Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
				</>
			) : (
				<Link to={items.route} className="d-flex align-items-center gap-2">
					{items.title}
				</Link>
			)}
		</li>
	);
};

export default MenuItems;