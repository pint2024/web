import { useEffect, useRef, useState } from "react";
import jaumzin from "assets/logo2.png";
import { MyMensagem } from "./myMensagem";
import { OthersMensagem } from "./othersMensagem";
import Texto from "components/texto/texto";
import { Botao, CaixaTexto } from "components/form/__init__";
import { isEmpty } from "utils/utils";
import { CONTENT_VH, SEND_MESSAGE_DELAY } from "data/constants";
import { Icon } from "components/icons/icon";
import { obterRequest } from "api/obterRequest";

export const Mensagens = ({ id }) => {
	const [sendMensagem, setsendMessage] = useState("");
	const [delayAtivo, setDelayAtivo] = useState(false);
	const [mensagens, setMensagens] = useState([
		/*
		{
			imagem: jaumzin,
			nome: "Alexander Pierce",
			data: "23 Jan 2:00 pm",
			mensagem: "Is this template really for free? That's unbelievable!",
			isMe: false,
		},
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 2:05 pm", mensagem: "You better believe it!", isMe: false },
		{
			imagem: jaumzin,
			nome: "Alexander Pierce",
			data: "23 Jan 5:37 pm",
			mensagem: "Working with AdminLTE on a great new app! Wanna join?",
			isMe: false,
		},
	*/
	]);
	const messageContainerRef = useRef(null);

	useEffect(() => {
		const fetchMensagens = async () => {
			const conversa = await obterRequest("conversa", 1);

			let novaMensagem = [];

			for (const mensagem of conversa.mensagem_conversa) {
				const participante_id = mensagem.participante;
				const utilizador = conversa.participante_conversa[participante_id - 1];

				const utilizador_nome =
					utilizador.participante_utilizador.nome + " " + utilizador.participante_utilizador.sobrenome;

				novaMensagem.push({
					imagem: jaumzin,
					nome: utilizador_nome,
					data: mensagem.data_criacao,
					mensagem: mensagem.mensagem,
					isMe: true,
				});



				//adicionarMensagem(jaumzin, utilizador_nome, mensagem.data_criacao, mensagem.mensagem, true);
			}
			setMensagens(novaMensagem);
			console.log("opa1", mensagens)
			console.log("opa2", novaMensagem)

		};

		fetchMensagens();
	}, []);

	useEffect(() => {
		// da scroll down quando é enviada uma nova mensagem
		if (messageContainerRef.current) {
			setTimeout(() => {
				voltarAbaixo();
			}, 100);
		}
	}, [mensagens]);

	const voltarAbaixo = () => {
		messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
	};

	const adicionarMensagem = (imagem, nome, data, mensagem, isMe) => {
		const novaMensagem = {
			imagem,
			nome,
			data,
			mensagem,
			isMe,
		};
		console.log(novaMensagem, " adicionada!");
		setMensagens([...mensagens, novaMensagem]);
	};

	const enviarMensagem = () => {
		if (isEmpty(sendMensagem) || delayAtivo) return;
		adicionarMensagem(jaumzin, "Daniel Val", new Date().toLocaleString(), sendMensagem, true);
		setsendMessage("");
		restartMessageDelay();
	};

	const restartMessageDelay = () => {
		setDelayAtivo(true);
		setTimeout(() => {
			setDelayAtivo(false);
		}, SEND_MESSAGE_DELAY);
	};

	return (
		<div className="card" style={{ height: "100%" }}>
			<div className="card-header">
				<Texto size={4}>Grupo X</Texto>
			</div>
			<div className="card-body" style={{ overflowY: "auto", maxHeight: `${CONTENT_VH}vh` }} ref={messageContainerRef}>
				{mensagens.map((mensagem, index) =>
					mensagem.isMe ? <MyMensagem key={index} {...mensagem} /> : <OthersMensagem key={index} {...mensagem} />
				)}
			</div>
			<div className="card-footer">
				<div className="d-flex gap-2">
					<CaixaTexto
						placeholder="Escrever uma mensagem"
						setValue={(e) => setsendMessage(e)}
						handleKeyDown={enviarMensagem}
						value={sendMensagem}
					/>
					{/*<Botao handleClick={enviarMensagem}>Enviar</Botao>*/}
					<div className="text-end" onClick={voltarAbaixo}>
						<Icon iconName="ArrowDown" type="primary" className="icon-square-hover icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
