import { ComboBoxSections } from "components/form/comboBox/ComboBoxSections";
import { Icone, Botao, Dropdown } from "components/index";
import { ConteudoSeccoes } from "./ConteudoSeccoes";
import { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { EnumConstants } from "data/enum.constants";
import { ApiRequest } from "api/apiRequest";

export function Conteudo() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const [dataTopicos, setdataTopicos] = useState(null);
	const [selectedTopico, setselectedTopico] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		if (selectedTopico) {
			fetchConteudoData({ subtopico: selectedTopico.id });
		} else {
			fetchConteudoData();
		}
	}, [selectedTopico]);

	useEffect(() => {
		fetchTopicoData();
	}, []);

	const fetchTopicoData = async () => {
		startLoading();
		const data = await ApiRequest.listar("topico");
		setdataTopicos(data);
	};

	const fetchConteudoData = async (body = {}) => {
		startLoading();
		const data = await ApiRequest.listar("conteudo/listagem", body);
		setdataConteudo(data);
		stopLoading();
	};

	if (!dataConteudo || !dataTopicos) return;

	const formatArrayForComboBox = dataTopicos.map((item) => {
		return {
			id: item.id,
			section: item.topico,
			options: item.subtopico_topico.map((subItem) => {
				return {
					id: subItem.id,
					label: subItem.area,
				};
			}),
		};
	});

	return (
		<div>
			<section className="d-flex gap-3 align-items-center">
				<div className="d-flex justify-content-end gap-3">
					<ComboBoxSections items={formatArrayForComboBox} handleChange={setselectedTopico} />
				</div>
				<div>
					<Dropdown
						items={[
							{ nome: "Evento", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.EVENTO.ID}` },
							{ nome: "Atividade", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID}` },
							{ nome: "Recomendação", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO.ID}` },
							{ nome: "Espaço", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.ESPACO.ID}` },
						]}
					>
						<Botao variant="transparente">
							<div className="d-flex">
								<Icone iconName="Plus" />
								<Icone iconName="CaretDownFill" />
							</div>
						</Botao>
					</Dropdown>
				</div>
			</section>
			<section>
				<ConteudoSeccoes
					titulo={"Espaços"}
					icon={"HouseDoor"}
					routeTo={"tipo/espacos"}
					data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.ESPACO.ID]}
				/>
				<ConteudoSeccoes
					titulo={"Atividades"}
					icon={"SignpostSplit"}
					routeTo={"tipo/atividades"}
					data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID]}
				/>
				<ConteudoSeccoes
					titulo={"Eventos"}
					icon={"CalendarX"}
					routeTo={"tipo/eventos"}
					data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.EVENTO.ID]}
				/>
				<ConteudoSeccoes
					titulo={"Recomendações"}
					icon={"Star"}
					routeTo={"tipo/recomendacoes"}
					data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO.ID]}
				/>
			</section>
		</div>
	);
}
