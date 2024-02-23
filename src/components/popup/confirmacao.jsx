import React from "react";
import { ModalBase } from "./modal";
import { Botao } from "../form/__init__";
import * as Icon from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";

export const Confirmacao = ({ title, body, onSuccess, onClose }) => {
	return (
		<Modal show={true} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{body}</Modal.Body>
			<Modal.Footer>
				<Botao variant="success" handleClick={onSuccess}>
					<Icon.CheckLg /> Sim
				</Botao>
				<Botao variant="danger" handleClick={onClose}>
					<Icon.XLg /> Não
				</Botao>
			</Modal.Footer>
		</Modal>
	);
};
