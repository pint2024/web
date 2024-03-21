import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
import Texto from "components/texto/texto";

export function Dropdown({ items, children }) {
	const menuDropdownRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) setIsOpen(false);
		};
		window.addEventListener("mouseup", handleOutsideClick);
		return () => {
			window.removeEventListener("mouseup", handleOutsideClick);
		};
	});

	return (
		<div id="Dropdown" className="dropdown" onClick={toggleDropdown} ref={menuDropdownRef}>
			{children}
			{isOpen && (
				<div className="dropdown-content">
					{items &&
						items.map((item, index) => (
							<Link to={item.rota} className="card-hover dropdown-item" key={index}>
								<Texto>{item.nome}</Texto>
							</Link>
						))}
				</div>
			)}
		</div>
	);
}
