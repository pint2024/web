import React from "react";
import { Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Texto from "../texto/texto";
import './popup.css'

export const ModalBase = ({ header, headerIcons, children, footer, onClose, styles, className, modalId = "modal-base" }) => {


	return (
		<Modal
			show={true}
			onHide={onClose}
			className={`modal fade show ${className}`}
			id={modalId}
			aria-hidden="true"
			style={{ display: `block ${styles}` }}
		>
			<Modal.Header className="d-flex justify-content-between">
				<Modal.Title>
					<div>{header}</div>
				</Modal.Title>
				<div className="d-flex align-items-center modal-header-icons">
					{headerIcons}
					<Icon.XLg title="Fechar" onClick={onClose} />
				</div>
			</Modal.Header>
			<Modal.Body style={{ overflowY: "auto" }}>{children}</Modal.Body>
			<Modal.Footer>{footer}</Modal.Footer>
		</Modal>
	);
};
