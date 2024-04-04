import React from "react";
import TabelaLista from "src/components/Tabelas/tabelaLista";
import { useData } from "src/api/dataComponents";
import LoadingPage from "src/components/LoadingPage/loadingPage";
import { parsedFormatComplete } from "src/utils/functionUtils";
import Popup from "src/components/Pop-up/popup";
import { Link } from "react-router-dom";
import { Button } from "src/components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TabelaUtilizadores() {
	const [dataUtilizador, loadingUtilizador] = useData("/utilizador/list");
	if (loadingUtilizador) return <LoadingPage />;
	const table = dataUtilizador?.map((data) => {
		return {
			ID: data.utilizador_id,
			Tag: (
				<Link to={`/conta/${data.utilizador_tag}`} className="link-colorido">
					{data.utilizador_tag}
				</Link>
			),
			Descrição: data.utilizador_descricao,
			Nome: data.utilizador_nome + " " + data.utilizador_apelido,
			Email: data.utilizador_email,
			"Data Criação": parsedFormatComplete(data.utilizador_datacriacao),
			Perfil: data?.util_perfil?.utilizadorperfil_nome,
			Localização: data?.util_cidade?.cidade_nome + ", " + data?.util_cidade?.cid_pais?.pais_nome,
			Escola: data?.utilizador_escola,
			"Formação Académica": data?.utilizador_formacaoacademica,
		};
	});

	return (
		<div>
			<TabelaLista
				table={table}
				tableName={"Utilizadores"}
				tableDeleteRoute={"utilizador"}
				children={
					<div className="d-flex gap-3 mt-2">
						<Button
							label={"Localizações"}
							icon={<FontAwesomeIcon icon={["fas", "plus"]} />}
							directTo={"/dashboard/tabelas/utilizadores/localizacao"}
						/>
					</div>
				}
			/>
		</div>
	);
}
