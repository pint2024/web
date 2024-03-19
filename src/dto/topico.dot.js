export class TopicoDTO {
	constructor(data) {
		this.id = data.id;
		this.data_criacao = data.data_criacao;
		this.topico = data.topico;
	}

	getComboBoxData() {
		return { value: this.id, label: this.topico };
	}
}
