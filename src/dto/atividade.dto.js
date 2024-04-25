import { DataRelativa } from "utils/date.utils";

export class AtividadeDTO {
	constructor(data) {
		this.id = data.id;
		this.data_criacao = data.data_criacao;
		this.titulo = data.titulo;
		this.descricao = data.descricao;
		this.endereco = data.endereco;
		this.preco = data.descricao;
		this.data_evento = data.data_evento;
		this.imagem = data.imagem;
		this.formulario = data.atividade_formulario;
		this.subtopico = {
			id: data.atividade_subtopico.id,
			data_criacao: data.atividade_subtopico.data_criacao,
			area: data.atividade_subtopico.area,
			topico: {
				id: data.atividade_subtopico.subtopico_topico.id,
				data_criacao: data.atividade_subtopico.subtopico_topico.data_criacao,
				topico: data.atividade_subtopico.subtopico_topico.topico,
			},
		};
		this.utilizador = {
			id: data.atividade_utilizador.id,
			data_criacao: data.atividade_utilizador.data_criacao,
			nome: data.atividade_utilizador.nome,
			sobrenome: data.atividade_utilizador.sobrenome,
			nome_completo: `${data.atividade_utilizador.nome} ${data.atividade_utilizador.sobrenome}`,
			email: data.atividade_utilizador.email,
			senha: data.atividade_utilizador.senha,
			verificado: data.atividade_utilizador.verificado,
			imagem: data.atividade_utilizador.imagem,
			linkedin: data.atividade_utilizador.linkedin,
			instagram: data.atividade_utilizador.instagram,
			facebook: data.atividade_utilizador.facebook,
			perfil: data.atividade_utilizador.perfil,
		};
		this.comentarios = {
			id: data.comentario_atividade.id,
			data_criacao: data.comentario_atividade.data_criacao,
			subcomentarios: data.comentario_atividade.subcomentario_comentario,
			comentario: data.comentario_atividade.comentario,
			utilizador: data.comentario_atividade.utilizador,
		}
		
		
		this.gostos = data.gosto_atividade;
		this.revisoes = data.revisao_atividade;
		this.notificacoes = data.notificacao_atividade;
		this.denuncias = data.denuncia_atividade;
	}

	formattToPost() {
		return {
			id: this.id,
			titulo: this.titulo,
			descricao: this.descricao,
			topico: this.subtopico.topico.topico,
			utilizador: this.utilizador,
			date: DataRelativa(this.data_criacao),
			gostos: this.gostos,
			comentarios: this.comentarios,
		};
	}
}
