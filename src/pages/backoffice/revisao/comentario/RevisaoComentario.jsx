import React, { useEffect, useState } from "react";
import "./revisao-comentario.css";
import { useCarregando } from "hooks/useCarregando";
import { Botao, Icone } from "components";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { EnumConstants } from "data/enum.constants";
import { DateUtils } from "utils/date.utils";
import { ApiRequest } from "api/apiRequest";

export function RevisaoComentario() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		startLoading();
		const data = await ApiRequest.listar("revisao", { conteudo: null, estado: EnumConstants.ESTADOS.EM_ANALISE }); // filtra os conteudos apenas
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

	return (
		<table className="revisao-tabela">
			<thead>
				<tr>
					<th>Motivo</th>
					<th>Data de Criação</th>
					<th>Estado</th>
					<th>Conteudo</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{dataConteudo ? (
					dataConteudo.map((item) => (
						<tr key={item.id}>
							<td>{item.motivo}</td>
							<td>{DateUtils.DataNormal(item.data_criacao)}</td>
							<td>{item.revisao_estado.estado}</td>
							<td>{item.revisao_comentario.comentario}</td>
							<td>
								<div className="d-flex gap-2">
									<Botao onClick={() => handleRevisaoAprovada(item.id)} variant={BUTTON_VARIANTS.SUCESSO}>
										<Icone iconName="Check" type={COMMON_TYPES.INVERSO} />
									</Botao>

									<Botao onClick={() => handleRevisaoRejeitada(item.id)} variant={BUTTON_VARIANTS.PERIGO}>
										<Icone iconName="X" type={COMMON_TYPES.INVERSO} />
									</Botao>
									<Botao route={`/conteudos/${item.revisao_comentario.comentario_conteudo.id}`}>
										<Icone iconName="ArrowRight" type={COMMON_TYPES.INVERSO} />
									</Botao>
								</div>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan="4">Carregando...</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}
