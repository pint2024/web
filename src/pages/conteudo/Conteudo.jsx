import { ComboBoxSections } from "components/form/comboBox/ComboBoxSections";
import { ComboBox, Icone, Botao, Dropdown } from "components/index";
import { ORDER_OPTIONS, TOPICOS_OPTIONS } from "data/data";
import { ConteudoSeccoes } from "./ConteudoSeccoes";
import { useEffect, useState } from "react";
import { Request } from "api";
import { useCarregando } from "hooks/useCarregando";
import { EnumConstants } from "data/enum.constants";

export function Conteudo() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		const fetchConteudoData = async () => {
			startLoading();
			const data = await Request.listar("tipo");
			setdataConteudo(data);
			stopLoading();
		};
		fetchConteudoData();
	}, []);

	const getTipoById = (id) => {
		for (let item of dataConteudo) {
			if (item.id === id) {
				return item?.conteudo_tipo;
			}
		}
		return null;
	};

	if (!dataConteudo) return;

	return (
		<div>
			<section className="d-flex gap-3">
				<div>
					<Dropdown
						items={[
							{ nome: "Evento", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.EVENTO}` },
							{ nome: "Atividade", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.ATIVIDADE}` },
							{ nome: "Recomendação", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO}` },
							{ nome: "Espaço", rota: `criar/${EnumConstants.CONTEUDO_TIPOS.ESPACO}` },
						]}
					>
						<Botao>
							<Icone iconName="Plus" className="text-types-inverse" />
							Adicionar
						</Botao>
					</Dropdown>
				</div>
				<div className="d-flex justify-content-end gap-3">
					<ComboBox placeholder="Centros" options={ORDER_OPTIONS} />
					<ComboBoxSections items={TOPICOS_OPTIONS} />
				</div>
			</section>
			<section>
				<ConteudoSeccoes titulo={"Espaços"} routeTo={"espacos"} data={getTipoById(EnumConstants.CONTEUDO_TIPOS.ESPACO)} />
				<ConteudoSeccoes titulo={"Atividades"} routeTo={"atividades"} data={getTipoById(EnumConstants.CONTEUDO_TIPOS.ATIVIDADE)} />
				<ConteudoSeccoes titulo={"Eventos"} routeTo={"eventos"} data={getTipoById(EnumConstants.CONTEUDO_TIPOS.EVENTO)} />
				<ConteudoSeccoes
					titulo={"Recomendações"}
					routeTo={"recomendacoes"}
					data={getTipoById(EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO)}
				/>
			</section>
		</div>
	);
}
