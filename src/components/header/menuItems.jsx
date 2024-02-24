import Dropdown from "./navDropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as Icons from 'react-bootstrap-icons';

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
						aria-haspopup="menu"
						aria-expanded={dropdown ? "true" : "false"}
						onClick={() => toggleDropdown()}
						to={items.route ? items.route : null}
					>
						{items.title}
						{depthLevel > 0 ? <Icons.CaretRightFill className="header-submenu-arrow" /> : <Icons.CaretDownFill className="header-menu-arrow" />}
					</Link>
					<Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
				</>
			) : (
				<Link to={items.route}>{items.title}</Link>
			)}
		</li>
	);
};

export default MenuItems;
