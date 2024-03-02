import React from "react";
import { Botao } from "components/form/__init__";
import * as Icon from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";
import { ModalBase } from "./modalBase";

export const Confirmacao = ({ title, body, onSuccess, onClose }) => {
	const handleSuccessClick = () => {
		onSuccess();
		onClose();
	};
	return (
		<section>
			<ModalBase
				popupWidth={false}
				headerTitle={title}
				onClose={onClose}
				footer={
					<div className="d-flex gap-2">
						<Botao variant="success" handleClick={handleSuccessClick}>
							<Icon.CheckLg /> Sim
						</Botao>
						<Botao variant="danger" handleClick={onClose}>
							<Icon.XLg /> Não
						</Botao>
					</div>
				}
				className="modal-confirmacao"
			>
				{body}
			</ModalBase>
		</section>
	);
};
