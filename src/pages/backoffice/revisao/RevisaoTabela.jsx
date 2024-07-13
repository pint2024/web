import React, { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { EnumConstants } from "data/enum.constants";
import { RevisaoLinha } from "./RevisaoLinha";
import { ApiRequest } from "api/apiRequest";

export function RevisaoTabela() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		startLoading();
		const data = await ApiRequest.listar("revisao", { comentario: null, estado: EnumConstants.ESTADOS.EM_ANALISE }); // filtra os conteudos apenas
		setdataConteudo(data);
		stopLoading();
	};

	if (!dataConteudo) return;

	const handleRevisaoAprovada = async (id) => {
		await ApiRequest.atualizar("revisao", id, { estado: EnumConstants.ESTADOS.APROVADO });
		fetchConteudoData();
	};

	const handleRevisaoRejeitada = async (id) => {
		await ApiRequest.atualizar("revisao", id, { estado: EnumConstants.ESTADOS.REJEITADO });
		fetchConteudoData();
	};

	function setupTableContent() {
		return (
			dataConteudo &&
			dataConteudo.map((item) => (
				<RevisaoLinha
					id={item.id}
					utilizador={item?.revisao_conteudo?.conteudo_utilizador}
					data_criacao={item.data_criacao}
					estado={item.revisao_estado.estado}
					titulo={item?.revisao_conteudo?.titulo}
					id_conteudo={item.id}
					handleAprovacao={handleRevisaoAprovada}
					handleRejeicao={handleRevisaoRejeitada}
				/>
			))
		);
	}

	return (
		<table className="revisao-tabela">
			<thead>
				<tr>
					<th>Utilizador</th>
					<th>Data de Criação</th>
					<th>Estado</th>
					<th>Conteudo</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>{setupTableContent()}</tbody>
		</table>
	);
}
