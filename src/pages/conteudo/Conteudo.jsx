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
		const fetchConteudoData = async () => {
			startLoading();

			try {
				const data = await ApiRequest.listar("tipo");
				if (selectedTopico) {
					const filteredData = data.map((tipo) => ({
						...tipo,
						conteudo_tipo: tipo.conteudo_tipo.filter(
							(conteudo) => conteudo.conteudo_subtopico.id === selectedTopico.id
						),
					}));
					console.log(filteredData);
					setdataConteudo(filteredData);
				} else {
					setdataConteudo(data);
				}
			} catch (error) {
				console.error("Erro ao buscar dados de conteúdo:", error);
			} finally {
				stopLoading();
			}
		};
		fetchConteudoData();
	}, [selectedTopico]);

	useEffect(() => {
		const fetchConteudoData = async () => {
			startLoading();
			const data = await ApiRequest.listar("topico");
			setdataTopicos(data);
		};
		fetchConteudoData();
	}, []);

	if (!dataConteudo || !dataTopicos) return;

	const getTipoById = (id) => {
		for (let item of dataConteudo) {
			if (item.id === id) {
				return item?.conteudo_tipo;
			}
		}
		return null;
	};

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
							<Icone iconName="CaretDownFill" style={{margin: "0px"}}/>
							</div>
						</Botao>
					</Dropdown>
				</div>
			</section>
			<section>
				<ConteudoSeccoes
					titulo={"Espaços"}
					routeTo={"tipo/espacos"}
					data={getTipoById(EnumConstants.CONTEUDO_TIPOS.ESPACO.ID)}
				/>
				<ConteudoSeccoes
					titulo={"Atividades"}
					routeTo={"tipo/atividades"}
					data={getTipoById(EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID)}
				/>

				<ConteudoSeccoes
					titulo={"Eventos"}
					routeTo={"tipo/eventos"}
					data={getTipoById(EnumConstants.CONTEUDO_TIPOS.EVENTO.ID)}
				/>
				<ConteudoSeccoes
					titulo={"Recomendações"}
					routeTo={"tipo/recomendacoes"}
					data={getTipoById(EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO.ID)}
				/>
			</section>
		</div>
	);
}
