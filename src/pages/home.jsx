import React from "react";
import { usePopup } from "../hooks/usePopup";
import { Botao, CaixaTexto } from "../components/form/__init__";
import { useConfirmation } from "../hooks/useConfirmation";
import { Notificacao } from "../components/notificacao/notificacao";
import { getColor } from "../data/colors";
import Cartao from "../components/card/cartao";
import Logo from "../assets/logo.png";
import User from "../assets/user-default.png";
import Texto from "../components/texto/texto";
import Post from "../components/card/post";

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
		Notificacao("opa");
	};

	return (
		<div>
			<Botao handleClick={handleOpenPopup}>Popup</Botao>
			{puCreate()}
			{conCreate()}
			<div style={{ marginLeft: '1%', marginRight: '70%', marginTop: "2%" }}>
				<Post
					titulo={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
					descricao={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}
					date={'à 1h'}
					utilizador={"Joaumzin Gaimeplais"}
				/>
			</div>
		</div>
	);
}

export default Home;
