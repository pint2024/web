import jaumzin from "assets/logo2.png";

export class ConversaDTO {
	constructor(data) {
		this.id = data.id;
		this.data_criacao = data.data_criacao;
		this.descricao = data.descricao;
		this.topico = data.conversa_topico;
		this.participantes = data.participante_conversa;
		this.mensagens = data.mensagem_conversa;
	}

	getMensagensFormatted() {
		let novaMensagem = [];
		for (const msg of this.mensagens) {
			const participante_id = msg.participante;
			const utilizador = this.participantes[participante_id - 1]; // menos um porque o array começa no 0 enquanto o id começa no 1

			const msg_autor = utilizador.participante_utilizador.nome + " " + utilizador.participante_utilizador.sobrenome;

			novaMensagem.push({
				imagem: jaumzin,
				nome: msg_autor,
				data: this.data_criacao,
				mensagem: msg.mensagem,
				isMe: true,
			});
		}

		return novaMensagem;
	}
}
