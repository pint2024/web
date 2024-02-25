import React, { useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";
import Texto from "../texto/texto";
import { Modal } from "react-bootstrap";
import { ModalBase } from "./modalBase";

export default function Popup({ headerInfo, headerTitle, headerIcons, body, footer, onClose }) {
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
		<section>
			<ModalBase
				headerInfo={headerInfo}
				headerTitle={
					<section className="popup-title">
						<Texto size={3}>{headerTitle}</Texto>
					</section>
				}
				headerIcons={headerIcons}
				footer={footer}
				onClose={onClose}
				className="modal-popup"
			>
				<section className="popup-body mt-3">{body}</section>
			</ModalBase>
		</section>
	);
}
