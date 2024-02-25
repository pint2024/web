import React from "react";
import { Botao } from "../form/__init__";
import * as Icon from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";
import { ModalBase } from "./modal";

export const Confirmacao = ({ title, body, onSuccess, onClose }) => {
	const handleSuccessClick = () => {
		onSuccess();
		onClose();
	};
	return (
		<section>
			<ModalBase
				header={title}
				onClose={onClose}
				footer={
					<>
						<Botao variant="success" handleClick={handleSuccessClick}>
							<Icon.CheckLg /> Sim
						</Botao>
						<Botao variant="danger" handleClick={onClose}>
							<Icon.XLg /> Não
						</Botao>
					</>
				}
			>
				{body}
			</ModalBase>
		</section>
	);
};
