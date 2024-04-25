export class UtilizadorDTO {
	constructor(data) {
		this.id = data.participante_utilizador.id;
		this.data_criacao = data.participante_utilizador.data_criacao;
		this.tag = data.participante_utilizador.tag;
		this.nome = data.participante_utilizador.nome;
		this.sobrenome = data.participante_utilizador.sobrenome;
		this.email = data.participante_utilizador.email;
		this.senha = data.participante_utilizador.senha;
		this.verificada = data.participante_utilizador.verificada;
		this.imagem = data.participante_utilizador.imagem;
		this.linkedin = data.participante_utilizador.linkedin;
		this.instagram = data.participante_utilizador.instagram;
		this.facebook = data.participante_utilizador.facebook;
		this.perfil = data.participante_utilizador.perfil;
	}
}
