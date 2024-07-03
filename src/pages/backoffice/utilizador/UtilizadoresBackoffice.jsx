import React, { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { DateUtils } from "utils/date.utils";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Imagem } from "components";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { Utils } from "utils/utils";

export function UtilizadorBackoffice() {
	const [dataUtilizadores, setdataUtilizadores] = useState(null);

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		const data = await ApiRequest.listar("utilizador/simples"); // filtra os conteudos apenas
		setdataUtilizadores(data);
	};

	return (
		<>
			<Botao route="criar">
				<Icone iconName="PlusLg" type={COMMON_TYPES.INVERSO} />
				Criar
			</Botao>
			{dataUtilizadores ? (
				<table className="revisao-tabela mt-4">
					<thead>
						<tr>
							<th>Imagem</th>
							<th>Tag</th>
							<th>Nome</th>
							<th>Sobrenome</th>
							<th>Email</th>
							<th>Inativo</th>
							<th>Verificado</th>
							<th>Perfil</th>
							<th>Centro</th>
							<th>Data criação</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{dataUtilizadores.map((item) => (
							<tr key={item.id}>
								<td>
									<ImagemModal imagemSelecionada={Utils.SetImagemUtilizador(item.imagem)}>
										<ImagemUtilizador src={item.imagem} className="card-user-picture" />
									</ImagemModal>
								</td>
								<td>@{item.tag}</td>
								<td>{item.nome}</td>
								<td>{item.sobrenome}</td>
								<td>{item.email}</td>
								<td>{item.inativo ? "Sim" : "Não"}</td>
								<td>{item.verificado ? "Sim" : "Não"}</td>
								<td>{item.utilizador_perfil.perfil}</td>
								<td>{item.centro ? item?.utilizador_centro?.centro : "Por definir." }</td>
								<td>{DateUtils.DataNormal(item.data_criacao)}</td>
								<td>
									<div className="d-flex gap-2">
										<Botao title="Verificar" variant={BUTTON_VARIANTS.SUCESSO}>
											<Icone iconName="Check" type={COMMON_TYPES.INVERSO} />
										</Botao>
										<Botao title="Denunciar" variant={BUTTON_VARIANTS.PERIGO}>
											<Icone iconName="Ban" type={COMMON_TYPES.INVERSO} />
										</Botao>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Carregando...</p>
			)}
		</>
	);
}
