import { listarRequest } from "api/listarRequest";
import { Botao, CaixaTexto, ComboBox, DatePicker, ImageBox, TextArea } from "components/form/__init__";
import { DTO } from "dto/dto";
import { TopicoDTO } from "dto/topico.dot";
import { useLoading } from "modules/hooks/useLoading";
import { useEffect, useState } from "react";
import { isEmpty } from "utils/utils";

export const AtividadeCriar = () => {
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
				/>
				<Botao>Criar</Botao>
			</form>
		</section>
	);
};
