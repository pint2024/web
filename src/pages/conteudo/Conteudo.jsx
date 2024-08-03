import { ComboBoxSections } from "components/form/comboBox/ComboBoxSections";
import { Icone, Botao, Dropdown } from "components/index";
import { ConteudoSeccoes } from "./ConteudoSeccoes";
import { useEffect, useState } from "react";
import { useLoading } from "hooks/useLoading";
import { EnumConstants } from "data/enum.constants";
import { ApiRequest } from "api/apiRequest";
import { PaginaInicial } from "pages/PaginaInicial";
import { LoadingAnimation } from "layouts/loading/LoadingAnimation";

export function Conteudo() {
	const [dataConteudo, setdataConteudo] = useState(null);

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async (body = {}) => {
		const data = await ApiRequest.listar("conteudo/listagem", body);
		setdataConteudo(data);
	};

	return (
		<div>
			{!dataConteudo ? (
				<div className="d-flex align-items-md-center justify-content-center">
					<LoadingAnimation />
				</div>
			) : (
				<section>
					<ConteudoSeccoes
						titulo={"Espaços"}
						icon={"HouseDoor"}
						routeTo={"tipo/espacos"}
						data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.ESPACO.ID]}
						id={EnumConstants.CONTEUDO_TIPOS.ESPACO.ID}
					/>
					<ConteudoSeccoes
						titulo={"Atividades"}
						icon={"SignpostSplit"}
						routeTo={"tipo/atividades"}
						data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID]}
						id={EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID}
					/>
					<ConteudoSeccoes
						titulo={"Eventos"}
						icon={"CalendarX"}
						routeTo={"tipo/eventos"}
						data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.EVENTO.ID]}
						id={EnumConstants.CONTEUDO_TIPOS.EVENTO.ID}
					/>
					<ConteudoSeccoes
						titulo={"Recomendações"}
						icon={"Star"}
						routeTo={"tipo/recomendacoes"}
						data={dataConteudo[EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO.ID]}
						id={EnumConstants.CONTEUDO_TIPOS.RECOMENDACAO.ID}
					/>
				</section>
			)}
		</div>
	);
}
