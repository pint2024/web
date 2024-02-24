import React, { useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";
import Texto from "../texto/texto";

export default function Popup({ headerTitle, headerSubtitle, headerIcons, body, footer, onClose }) {
	const popupRef = useRef(null);

	function handlePopupClose() { onClose(); }

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
		<div className="popup-modal">
			<div className="modal-backdrop bg-dark opacity-50"></div>
			<div className="modal fade show d-block" id={"popuploadable"} aria-hidden="true">
				<div
					className="modal-dialog modal-lg modal-content"
					style={{ height: "100%", maxHeight: 90 + "vh" }}
					ref={popupRef}
				>
					<section className="modal-header d-flex justify-content-between">
						<div>
							<Texto size={3} className="modal-title" id="exampleModalLabel">
								{headerTitle}
							</Texto>
							<Texto size={3}>{headerSubtitle}</Texto>
						</div>
						<div className="d-flex align-items-center">
							{headerIcons}
							<Icon.X className="icon-hover icon" title="Fechar" onClick={handlePopupClose} />
						</div>
					</section>
					{body && (
						<section className="modal-body" style={{ overflowY: "auto" }}>
							{body}
						</section>
					)}
					{footer && <section className="modal-footer">{footer}</section>}
				</div>
			</div>
		</div>
	);
}
