import React, { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { EnumConstants } from "data/enum.constants";
import "../painel-tabela.css";
import { LinhaComentario } from "./LinhaComentario";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Notificacao } from "components";
import { usePopupDialogo } from "hooks/usePopupDialogo";
import { BUTTON_VARIANTS } from "data/data";
import { Filtros } from "./Filtros";

export function ComentarioPainel() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const [filteredUtilizadores, setFilteredUtilizadores] = useState([]);
	const { startLoading, stopLoading } = useCarregando();
	const puHandleRevisao = usePopupDialogo();

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		startLoading();
		const data = await ApiRequest.listar("comentario/revisao");
		setdataConteudo(data);
		setFilteredUtilizadores(data);
		stopLoading();
	};

	const handleUpdateRevisao = async (id, estado) => {
		startLoading();
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
				<LinhaComentario
					utilizador={item?.comentario_utilizador}
					data_criacao={item.data_criacao}
					estado={item.revisao_comentario[0].revisao_estado?.estado}
					titulo={item?.comentario}
					id_conteudo={item.comentario_conteudo.id}
					id_comentario={item.id}
					id_revisao={item.revisao_comentario[0].id}
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
			<table className="painel-tabela">
				<thead>
					<tr>
						<th>Utilizador</th>
						<th>Data de Criação</th>
						<th>Estado</th>
						<th>Comentário</th>
						<th></th>
						</tr>
				</thead>
				<tbody>{setupTableContent()}</tbody>
			</table>
		</>
	);
}