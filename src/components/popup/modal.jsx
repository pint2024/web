import React from "react";
import { Modal } from "react-bootstrap";

export const ModalBase = ({ header, body, footer }) => {
	return (
		<Modal show={true} className="modal fade show" id={"popuploadable"} aria-hidden="true" style={{ display: "block" }}>
			<Modal.Header>
				<Modal.Title>{header}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{body}</Modal.Body>
			<Modal.Footer>{footer}</Modal.Footer>
		</Modal>
	);
};
