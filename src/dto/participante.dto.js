import jaumzin from "assets/images/logo2.png";

export class ParticipanteDTO {
	constructor(data) {
		this.id = data.id;
		this.data_criacao = data.data_criacao;
		this.conversa = data.conversa;
		this.utilizador = data.utilizador;
		this.perfil = data.participante_perfil.perfil;
		this.conversa = {
			id: data.participante_conversa.id,
			data_criacao: data.participante_conversa.data_criacao,
			titulo: data.participante_conversa.titulo,
			descricao: data.participante_conversa.descricao,
			topico: data.participante_conversa.topico,
		};
		this.utilizador = {
			id: data.participante_utilizador.id,
			data_criacao: data.participante_utilizador.data_criacao,
			tag: data.participante_utilizador.tag,
			nome: data.participante_utilizador.nome,
			sobrenome: data.participante_utilizador.sobrenome,
			email: data.participante_utilizador.email,
			senha: data.participante_utilizador.senha,
			verificada: data.participante_utilizador.verificada,
			imagem: data.participante_utilizador.imagem,
			linkedin: data.participante_utilizador.linkedin,
			instagram: data.participante_utilizador.instagram,
			facebook: data.participante_utilizador.facebook,
			perfil: data.participante_utilizador.perfil,
		};
	}


	getContactosFormatted() {
		return { imagem: jaumzin, nome: this.conversa.titulo, data: this.data_criacao, mensagem: "Can I take a look at..." };
	}
}
