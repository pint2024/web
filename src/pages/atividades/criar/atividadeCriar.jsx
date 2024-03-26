import { listarRequest } from "api/listarRequest";
import { Botao, CaixaTexto, ComboBox, DatePicker, ImageBox, TextArea } from "components/form/__init__";
import { DTO } from "dto/dto";
import { TopicoDTO } from "dto/topico.dot";
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
				<CaixaTexto label="Título" handleChange={(e) => setFormTitulo(e)} />
				<TextArea label="Descrição" handleChange={(e) => setFormDescricao(e)} />
				<CaixaTexto label="Endreço" handleChange={(e) => setFormEndereco(e)} />
				<CaixaTexto label="Preço" type="number" handleChange={(e) => setFormPreco(e)} />
				<DatePicker label="Data Evento" handleChange={(e) => setFormDataEvento(e)} />
				<ImageBox label="Imagem" handleChange={(e) => setFormImagem(e)} />
				<TextArea label="Formulário" handleChange={(e) => setFormFormulario(e)} />
				<ComboBox
					label="Subtópico"
					handleChange={(e) => setFormSubtopico(e)}
					options={formatSubtopicoData()}
				/>
				<Botao>Criar</Botao>
			</form>
		</section>
	);
};
