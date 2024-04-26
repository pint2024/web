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
	const [formDataEvento, setFormDataEvento] = useState(null);
	const [formImagem, setFormImagem] = useState(null);
	const [formFormulario, setFormFormulario] = useState(null);
	const [formSubtopico, setFormSubtopico] = useState(null);

	return (
		<section>
			<form>
				<div className="d-flex gap-3">
					<CaixaTexto placeholder="Título" handleChange={(e) => setFormTitulo(e)} />
					<ComboBox
						placeholder="Escolha o subtópico"
						handleChange={(e) => setFormSubtopico(e)}
					/>
				</div>
				<div className="mt-3">
					<DraftEditor />
				</div>
				<CaixaTexto placeholder="Endreço" handleChange={(e) => setFormEndereco(e)} />
				<DatePicker placeholder="Data Evento" handleChange={(e) => setFormDataEvento(e)} />
				<ImageBox placeholder="Imagem" handleChange={(e) => setFormImagem(e)} />
				<TextArea placeholder="Formulário" handleChange={(e) => setFormFormulario(e)} />
				<Botao>Criar</Botao>
			</form>
		</section>
	);
};
