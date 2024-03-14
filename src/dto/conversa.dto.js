import jaumzin from "assets/images/logo2.png";

export class ConversaDTO {
	constructor(data) {
		this.id = data.id;
		this.data_criacao = data.data_criacao;
		this.titulo = data.titulo;
		this.descricao = data.descricao;
		this.topico = data.conversa_topico;
		this.participantes = data.participante_conversa;
		this.mensagens = data.mensagem_conversa;
	}

	getMensagensFormatted(isMe = true) {
		let novaMensagem = [];
		for (const msg of this.mensagens) {
			const participante_id = msg.participante;
			const utilizador = this.getParticipanteById(participante_id);

			const msg_autor = `${utilizador.participante_utilizador.nome} ${utilizador.participante_utilizador.sobrenome}`;

			novaMensagem.push({
				id: this.id,
				imagem: jaumzin,
				nome: msg_autor,
				data: this.data_criacao,
				mensagem: msg.mensagem,
				isMe,
			});
		}

		return novaMensagem;
	}

	getParticipanteById(id) {
		for (let i = 0; i < this.participantes.length; i++) {
			if (this.participantes[i].id === id) {
				return this.participantes[i];
			}
		}
		return null;
	}

	getParticipantesFormatted() {
		return this.participantes
			.map(
				(participante) =>
					`${participante.participante_utilizador.nome} ${participante.participante_utilizador.sobrenome}`
			)
			.join(", ");
	}
}
