export class TopicoDTO {
	constructor(data) {
		this.id = data.id;
		this.data_criacao = data.data_criacao;
		this.topico = data.topico;
		this.subtopico = data.subtopico_topico;
	}

	getComboBoxData() {
		return { value: this.id, label: this.topico };
	}

	formatComboBoxData() {
		const formattedData = [];
		for (let i = 0; i < this.subtopico.length; i++) {
			const label = `${this.subtopico[i].area} (${this.topico})`;
			const value = this.subtopico[i].id;
			formattedData.push({ label, value });
		}
		return formattedData;
	}
}
