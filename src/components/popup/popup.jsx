import React, { useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";
import Texto from "../texto/texto";
import { Modal } from "react-bootstrap";
import { ModalBase } from "./modal";

export default function Popup({ headerTitle, headerSubtitle, headerIcons, body, footer, onClose }) {
	const popupRef = useRef(null);

	function handlePopupClose() {
		onClose();
	}

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handlePopupClose();
			}
		};
		window.addEventListener("keyup", handleKeyDown);
		return () => {
			window.removeEventListener("keyup", handleKeyDown);
		};
	});

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				handlePopupClose();
			}
		};
		window.addEventListener("mouseup", handleOutsideClick);
		return () => {
			window.removeEventListener("mouseup", handleOutsideClick);
		};
	});

	return (
		<>
			<ModalBase
				header={
					<>
						<Texto size={3}>{headerTitle}</Texto>
						<Texto size={2}>{headerSubtitle}</Texto>
					</>
				}
				headerIcons={headerIcons}
				footer={footer}
				onClose={onClose}
			>
				{body}
			</ModalBase>
		</>
	);
}
