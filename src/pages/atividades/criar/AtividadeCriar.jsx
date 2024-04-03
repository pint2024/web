import { listarRequest } from "api/listarRequest";
import { Botao, CaixaTexto, ComboBox, DatePicker, ImageBox, TextArea } from "components/form";
import { DraftEditor } from "components/form/draft-editor/DraftEditor";
import { DTO } from "dto/dto";
import { TopicoDTO } from "dto/topico.dto";
import { useLoading } from "hooks/useLoading";
import { useEffect, useState } from "react";
import { isEmpty } from "utils/utils";

export const AtividadeCriar = () => {
	const [subtopicoData, setSubtopicoData] = useState(null);
	const { startLoading, stopLoading } = useLoading();
	const [formTitulo, setFormTitulo] = useState(null);
	const [formDescricao, setFormDescricao] = useState(null);
	const [formEndereco, setFormEndereco] = useState(null);
	const [formPreco, setFormPreco] = useState(null);
	const [formDataEvento, setFormDataEvento] = useState(null);
	const [formImagem, setFormImagem] = useState(null);
	const [formFormulario, setFormFormulario] = useState(null);
	const [formSubtopico, setFormSubtopico] = useState(null);
	useEffect(() => {
		const fetchSubtopico = async () => {
			const data = await listarRequest("topico");
			const subtopicos = DTO.createDTOs(data, TopicoDTO);
			setSubtopicoData(subtopicos);
		};

		fetchSubtopico();
	}, []);

	if (isEmpty(subtopicoData)) {
		startLoading();
		return;
	} else {
		stopLoading();
	}

	const formatSubtopicoData = () => {
		let options = [];
		subtopicoData.forEach((item) => {
			options = options.concat(item.formatComboBoxData());
		});
		console.log(options);
		return options;
	};

	return (
		<section>
			<form>
				<CaixaTexto placeholder="Título" handleChange={(e) => setFormTitulo(e)} />
				<DraftEditor/>
				<CaixaTexto placeholder="Endreço" handleChange={(e) => setFormEndereco(e)} />
				<CaixaTexto placeholder="Preço" type="number" handleChange={(e) => setFormPreco(e)} />
				<DatePicker placeholder="Data Evento" handleChange={(e) => setFormDataEvento(e)} />
				<ImageBox placeholder="Imagem" handleChange={(e) => setFormImagem(e)} />
				<TextArea placeholder="Formulário" handleChange={(e) => setFormFormulario(e)} />
				<ComboBox placeholder="Escolha o subtópico" handleChange={(e) => setFormSubtopico(e)} options={formatSubtopicoData()} />
				<Botao>Criar</Botao>
			</form>
		</section>
	);
};
