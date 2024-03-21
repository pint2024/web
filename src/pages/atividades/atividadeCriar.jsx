import { listarRequest } from "api/listarRequest";
import { Botao, CaixaTexto, ComboBox, DatePicker, ImageBox, TextArea } from "components/form/__init__";
import { DTO } from "dto/dto";
import { TopicoDTO } from "dto/topico.dot";
import { useLoading } from "modules/hooks/useLoading";
import { useEffect, useState } from "react";
import { isEmpty } from "utils/utils";

export const AtividadeCriar = () => {
	const [subtopicoData, setSubtopicoData] = useState(null);
	const { startLoading, stopLoading } = useLoading();
	const [formData, setFormData] = useState({
		titulo: "",
		descricao: "",
		endereco: "",
		preco: "",
		data_evento: "",
		imagem: "",
		formulario: "",
		subtopico: "",
	});

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
				<CaixaTexto label="Título" handleChange={(e) => setFormData({ ...formData, titulo: e })} />
				<TextArea label="Descrição" handleChange={(e) => setFormData({ ...formData, descricao: e })} />
				<CaixaTexto label="Endreço" handleChange={(e) => setFormData({ ...formData, endereco: e })} />
				<CaixaTexto label="Preço" type="number" handleChange={(e) => setFormData({ ...formData, preco: e })} />
				<DatePicker label="Data Evento" handleChange={(e) => setFormData({ ...formData, data_evento: e })} />
				<ImageBox label="Imagem" handleChange={(e) => setFormData({ ...formData, imagem: e })} />
				<TextArea label="Formulário" handleChange={(e) => setFormData({ ...formData, formulario: e })} />
				<ComboBox
					label="Subtópico"
					handleChange={(e) => setFormData({ ...formData, subtopico: e })}
					options={formatSubtopicoData()}
				/>
				<Botao>Criar</Botao>
			</form>
		</section>
	);
};
