import React, { useEffect, useState } from "react";
import { useLoading } from "hooks/useLoading";
import { EnumConstants } from "data/enum.constants";
import "../painel-tabela.css";
import { LinhaConteudo } from "./LinhaConteudo";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Notificacao } from "components";
import { usePopupDialogo } from "hooks/usePopupDialogo";
import { BUTTON_VARIANTS } from "data/data";
import { Filtros } from "./Filtros";
import { RefreshIcone } from "components/common/icone/RefreshIcone";

export function ConteudoPainel() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const [filteredUtilizadores, setFilteredUtilizadores] = useState([]);
	const loading = useLoading();
	const puHandleRevisao = usePopupDialogo();

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const handleRefresh = () => {
		fetchConteudoData();
	}

	const fetchConteudoData = async () => {
		loading.start();
		const data = await ApiRequest.listar("conteudo/revisao");
		setdataConteudo(data);
		setFilteredUtilizadores(data);
		loading.stop();
	};

	const handleUpdateRevisao = async (id, estado) => {
		loading.start();
		puHandleRevisao.conClose();
		await ApiRequest.atualizar("revisao", id, { estado: estado });
		fetchConteudoData();
		Notificacao("Estado da revisão atualizado com sucesso!");
	};

	const handleRevisaoAprovada = async (id) => {
		handleUpdateRevisao(id, EnumConstants.ESTADOS.APROVADO);
	};

	const handleRevisaoRejeitada = async (id) => {
		handleUpdateRevisao(id, EnumConstants.ESTADOS.REJEITADO);
	};

	const handleRevisaoAnalise = async (id) => {
		handleUpdateRevisao(id, EnumConstants.ESTADOS.EM_ANALISE);
	};

	if (!dataConteudo) return;

	function setupTableContent() {
		return (
			filteredUtilizadores &&
			filteredUtilizadores.map((item) => (
				<LinhaConteudo
					utilizador={item?.conteudo_utilizador}
					data_criacao={item.data_criacao}
					estado={item.revisao_conteudo[0].revisao_estado?.estado}
					titulo={item?.titulo}
					tipo={item?.conteudo_tipo.tipo}
					subtopico={item?.conteudo_subtopico.area}
					id_conteudo={item.id}
					id_revisao={item.revisao_conteudo[0].id}
					handlePopupOpen={handlePopupOpen}
				/>
			))
		);
	}

	const handlePopupOpen = (id, titulo) => {
		puHandleRevisao.conSet({
			title: `Rever: ${titulo}`,
			body: null,
			footer: (
				<>
					<Botao variant={BUTTON_VARIANTS.SUCESSO} onClick={() => handleRevisaoAprovada(id)}>
						<Icone iconName="XLg" className="icon-inverse" /> Aprovar
					</Botao>
					<Botao variant={BUTTON_VARIANTS.SECUNDARIO} onClick={() => handleRevisaoAnalise(id)}>
						<Icone iconName="XLg" className="icon-inverse" /> Análise
					</Botao>
					<Botao variant={BUTTON_VARIANTS.PERIGO} onClick={() => handleRevisaoRejeitada(id)}>
						<Icone iconName="XLg" className="icon-inverse" /> Rejeitar
					</Botao>
				</>
			),
		});
		puHandleRevisao.conOpen();
	};

	return (
		<>
			{puHandleRevisao.conCreate()}
			<Filtros data={dataConteudo} setFiltered={setFilteredUtilizadores} />
			<div className="d-flex justify-content-end mt-4">
				<RefreshIcone handleRefresh={() => handleRefresh()} />
			</div>
			<table className="painel-tabela">
				<thead>
					<tr>
						<th>Utilizador</th>
						<th>Data de Criação</th>
						<th>Estado</th>
						<th>Conteudo</th>
						<th>Tipo</th>
						<th>Subtópico</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{setupTableContent()}</tbody>
			</table>
		</>
	);
}
