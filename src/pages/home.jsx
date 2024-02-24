import React from "react";
import { usePopup } from "../hooks/usePopup";
import { Botao, CaixaTexto } from "../components/form/__init__";
import { useConfirmation } from "../hooks/useConfirmation";
import { Notificacao } from "../components/notificacao/notificacao";
import { getColor } from "../data/colors";

function Home() {
	const { puSet, puCreate, puOpen } = usePopup();
	const { conSet, conOpen, conCreate } = useConfirmation(false);

	const handleOpenPopup = () => {
		puSet({
			headerTitle: "Título do Popup",
			headerSubtitle: "Subtítulo do Popup",
			headerIcons: null,
			body: (
				<section>
					<CaixaTexto label={"ola"} />
				</section>
			),
			footer: <Botao>Adicionar</Botao>,
		});
		puOpen();
	};

	const handleOpenConfirmation = () => {
		conSet({
			title: "Título da Confirmação",
			body: "Corpo da Confirmação",
			onSuccess: () => handleConfirmationAccepted
		});
		conOpen();
	};

	const handleConfirmationAccepted = () => {
        console.log(getColor('DANGER'));
		Notificacao('opa');
	}

	return (
		<div>
			<Botao handleClick={handleOpenPopup}>Popup</Botao>
			<Botao handleClick={handleOpenConfirmation}>Confirmação</Botao>
			{puCreate()}
			{conCreate()}
		</div>
	);
}

export default Home;