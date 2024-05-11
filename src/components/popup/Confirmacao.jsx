import React from "react";
import { Botao } from "components/form";
import { ModalBase } from "./ModalBase";
import { Icon } from "components/elementos";

export const Confirmacao = ({ title = "Título da Confirmação", body = "Corpo da Confirmação", onSuccess, onClose }) => {
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
						<Botao variant="sucesso" onClick={handleSuccessClick}>
							<Icon iconName="CheckLg" className="icon-inverse" /> Sim
						</Botao>
						<Botao variant="perigo" onClick={onClose}>
							<Icon iconName="XLg" className="icon-inverse" /> Não
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
