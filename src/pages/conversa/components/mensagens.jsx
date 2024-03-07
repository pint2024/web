import jaumzin from "assets/logo2.png";
import { Mensagem } from "./mensagem";
import Texto from "components/texto/texto";
import { Botao, CaixaTexto } from "components/form/__init__";
import { useState } from "react";
import { isEmpty } from "utils/utils";
import { CONTENT_VH } from "data/constants";

export const Mensagens = ({ id }) => {
	const [sendMensagem, setsendMessage] = useState("");
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

	const adicionarMensagem = () => {
		if (isEmpty(sendMensagem)) return;
		const mensagemObj = {
			imagem: jaumzin,
			nome: "Daniel Val",
			data: new Date().toLocaleString(),
			mensagem: sendMensagem,
			isMe: true,
		};
		setMensagens([...mensagens, mensagemObj]);
		setsendMessage("");
	};

	return (
		<div className="card" style={{ height: "100%" }}>
			<div className="card-header">
				<Texto size={4}>Grupo X</Texto>
			</div>
			<div className="card-body" style={{ overflowY: "auto", maxHeight: `${CONTENT_VH}vh` }}>
				<div>
					{mensagens.map((mensagem, index) => (
						<Mensagem key={index} {...mensagem} />
					))}
				</div>
			</div>
			<div className="card-footer">
				<div className="d-flex gap-2">
					<CaixaTexto
						placeholder="Escrever uma mensagem"
						handleChange={(e) => setsendMessage(e.target.value)}
						handleKeyDown={adicionarMensagem}
						value={sendMensagem}
					/>
					<Botao handleClick={adicionarMensagem}>Enviar</Botao>
				</div>
			</div>
		</div>
	);
};
