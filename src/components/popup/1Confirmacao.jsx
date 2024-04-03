import React from "react";
import { Botao } from "components/form";
import { ModalBase } from "./1ModalBase";
import { Icon } from "components/elementos/index";

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
						<Botao variant="sucesso" handleClick={handleSuccessClick}>
							<Icon iconName="CheckLg" className="icon-inverse" /> Sim
						</Botao>
						<Botao variant="perigo" handleClick={onClose}>
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
