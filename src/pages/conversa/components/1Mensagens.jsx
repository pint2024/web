import { useEffect, useRef, useState } from "react";
import jaumzin from "assets/images/logo2.png";
import { MyMensagem } from "./1MyMensagem";
import { OthersMensagem } from "./1OthersMensagem";
import { CaixaTexto } from "components/form";
import { isEmpty } from "utils/utils";
import { SEND_MESSAGE_DELAY } from "data/constants";
import { Icon, Texto } from "components/elementos/index";
import { obterRequest } from "api/obterRequest";
import { ConversaDTO } from "dto/conversa.dto";
import { useLoading } from "hooks/useLoading";

export const Mensagens = ({ id }) => {
	const { startLoading, stopLoading } = useLoading();
	const [sendMensagem, setsendMessage] = useState("");
	const [delayAtivo, setDelayAtivo] = useState(false);
	const [conversaData, setconversaData] = useState(null);
	const [mensagens, setMensagens] = useState([]);
	const messageContainerRef = useRef(null);

	useEffect(() => {
		const fetchMensagens = async () => {
			const data = await obterRequest("conversa", id);
			const conversa = new ConversaDTO(data);
			setconversaData(conversa);
			const mensagensFormatadas = conversa.getMensagensFormatted();
			setMensagens(mensagensFormatadas);
			stopLoading();
		};

		fetchMensagens();
	}, [id]);

	useEffect(() => {
		if (messageContainerRef.current) {
			// da scroll down quando é enviada uma nova mensagem
			setTimeout(() => {
				voltarAbaixo();
			}, 100);
		}
	}, [mensagens]);

	if (isEmpty(conversaData)) {
		startLoading();
		return;
	}

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
				<Texto size={4}>{conversaData.titulo}</Texto>
				<Texto size={1}>{conversaData.descricao}</Texto>
				<Texto size={1}>{conversaData.getParticipantesFormatted()}</Texto>
			</div>
			<div className="card-body" style={{ overflowY: "auto" }} ref={messageContainerRef}>
				{mensagens.map((mensagem, index) =>
					mensagem.isMe ? <MyMensagem key={index} {...mensagem} /> : <OthersMensagem key={index} {...mensagem} />
				)}
			</div>
			<div className="card-footer">
				<div className="d-flex gap-2">
					<CaixaTexto
						placeholder="Escrever uma mensagem"
						handleChange={(e) => setsendMessage(e)}
						handleKeyDown={enviarMensagem}
						value={sendMensagem}
					/>
					<div className="text-end" onClick={voltarAbaixo}>
						<Icon iconName="ArrowDown" type="primary" className="icon-square-hover icon" />
					</div>
				</div>
			</div>
		</div>
	);
};