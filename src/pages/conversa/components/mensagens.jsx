import { useEffect, useRef, useState } from "react";
import jaumzin from "assets/logo2.png";
import { Mensagem } from "./mensagem";
import Texto from "components/texto/texto";
import { Botao, CaixaTexto } from "components/form/__init__";
import { isEmpty } from "utils/utils";
import { CONTENT_VH, SEND_MESSAGE_DELAY } from "data/constants";

export const Mensagens = ({ id }) => {
	const [sendMensagem, setsendMessage] = useState("");
	const [delayAtivo, setDelayAtivo] = useState(false);
	const [mensagens, setMensagens] = useState([
		{
			imagem: jaumzin,
			nome: "Alexander Pierce",
			data: "23 Jan 2:00 pm",
			mensagem: "Is this template really for free? That's unbelievable!",
			isMe: false,
		},
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 2:05 pm", mensagem: "You better believe it!", isMe: true },
		{
			imagem: jaumzin,
			nome: "Alexander Pierce",
			data: "23 Jan 5:37 pm",
			mensagem: "Working with AdminLTE on a great new app! Wanna join?",
			isMe: false,
		},
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
		{ imagem: jaumzin, nome: "Sarah Bullock", data: "23 Jan 6:10 pm", mensagem: "I would love to.", isMe: true },
	]);
	const messageContainerRef = useRef(null);

	useEffect(() => {
		if (messageContainerRef.current) {
			setTimeout(() => {
				messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
			}, 100);
		}
	}, [mensagens]);

	const adicionarMensagem = () => {
		if (isEmpty(sendMensagem) || delayAtivo) return;
		const mensagemObj = {
			imagem: jaumzin,
			nome: "Daniel Val",
			data: new Date().toLocaleString(),
			mensagem: sendMensagem,
			isMe: true,
		};
		setMensagens([...mensagens, mensagemObj]);
		setsendMessage("");
		restartMessageDelay();
	};

	const restartMessageDelay = () => {
		setDelayAtivo(true);
		setTimeout(() => {
			setDelayAtivo(false);
		}, SEND_MESSAGE_DELAY);
	}

	return (
		<div className="card" style={{ height: "100%" }}>
			<div className="card-header">
				<Texto size={4}>Grupo X</Texto>
			</div>
			<div className="card-body" style={{ overflowY: "auto", maxHeight: `${CONTENT_VH}vh` }} ref={messageContainerRef}>
				{mensagens.map((mensagem, index) => (
					<Mensagem key={index} {...mensagem} />
				))}
			</div>
			<div className="card-footer">
				<div className="d-flex gap-2">
					<CaixaTexto
						placeholder="Escrever uma mensagem"
						setValue={(e) => setsendMessage(e)}
						handleKeyDown={adicionarMensagem}
						value={sendMensagem}
						disabled={delayAtivo ? true : false}
					/>
					<Botao handleClick={adicionarMensagem}>Enviar</Botao>
				</div>
			</div>
		</div>
	);
};
