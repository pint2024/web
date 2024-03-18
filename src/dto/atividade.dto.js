import jaumzin from "assets/images/logo2.png";
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
		this.subtopico = data.atividade_subtopico;
		this.utilizador = data.atividade_utilizador;
		this.gostos = data.gosto_atividade;
		this.comentarios = data.comentario_atividade;
		this.revisoes = data.revisao_atividade;
		this.notificacoes = data.notificacao_atividade;
		this.denuncias = data.denuncia_atividade;
	}

	formattToPost() {
		return { id: this.id, titulo: this.titulo, descricao: this.descricao, date: DataRelativa(this.data_criacao), utilizador: `${this.utilizador.nome} ${this.utilizador.sobrenome}` }
	}
}
