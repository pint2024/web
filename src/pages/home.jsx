import React from "react";
import { usePopup } from "../hooks/usePopup";
import { Botao, CaixaTexto } from "../components/form/__init__";
import { useConfirmation } from "../hooks/useConfirmation";
import { Notificacao } from "../components/notificacao/notificacao";
import { getColor } from "../data/colors";
import Cartao from "../components/cartao/cartao";
import Logo from "../assets/logo.png";
import User from "../assets/user-default.png";
import Texto from "../components/texto/texto";
import Post from "../components/cartao/post";
import { PLACEHOLDER_TEXT } from "../data/constants";

function Home() {
	const { puSet, puCreate, puOpen } = usePopup();
	const { conSet, conOpen, conCreate } = useConfirmation(false);

	const handleOpenPopup = () => {
		puSet({
			headerInfo: "Subtítulo do Popup",
			headerTitle: "Título do Popup",
			headerIcons: null,
			body: (
				<section>
					<CaixaTexto
						title={"ola"}
						prefix={"asd2"}
						inputType={"number"}
						marginTop={"asd4"}
						value={"asd6"}
						disabled={false}
					/>
				</section>
			),
			footer: <Botao handleClick={handleOpenConfirmation}>Adicionar</Botao>,
		});
		puOpen();
	};

	const handleOpenConfirmation = () => {
		conSet({
			title: "Título da Confirmação",
			body: "Corpo da Confirmação",
			onSuccess: () => handleConfirmationAccepted,
		});
		conOpen();
	};

	const handleConfirmationAccepted = () => {
		Notificacao("opa", "success");
		Notificacao("opa", "info");
		Notificacao("opa", "warn");
		Notificacao("opa", "error");
	};

	return (
		<div>
			<Botao handleClick={handleOpenPopup}>Popup</Botao>
			{puCreate()}
			{conCreate()}
			<Botao handleClick={handleOpenConfirmation}>Adicionar</Botao>
			<Botao handleClick={handleConfirmationAccepted}>Notificações</Botao>
			<div style={{ marginLeft: '1%', marginRight: '', marginTop: "2%" }}>
				<Post
					id={1}
					titulo={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
					descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
					date={'à 1h'}
					utilizador={"Joaumzin Gaimeplais"}
				/>
			</div>
		</div>
	);
}

export default Home;
