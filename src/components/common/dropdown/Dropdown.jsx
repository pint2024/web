import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, styled } from "@mui/material";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: theme.palette.text.primary,
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: theme.palette.action.selected,
			},
		},
	},
}));

export function Dropdown({ items, children }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const isOpen = Boolean(anchorEl);
	const menuDropdownRef = useRef(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	// useEffect to toggle body scroll
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	return (
		<div ref={menuDropdownRef}>
			<div onClick={handleClick}>{children}</div>
			<StyledMenu
				inputProps={{ MenuProps: { disableScrollLock: true } }}
				id="customized-menu"
				anchorEl={anchorEl}
				open={isOpen}
				onClose={handleClose}
			>
				{items &&
					items.map((item, index) => (
						<Link
							key={index}
							to={item.rota}
							onClick={item.onclick && (() => item.onclick())}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<MenuItem onClick={handleClose}>{item.nome}</MenuItem>
						</Link>
					))}
			</StyledMenu>
		</div>
	);
}
