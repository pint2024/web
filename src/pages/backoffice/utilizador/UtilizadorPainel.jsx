import React, { useEffect, useState } from "react";
import { useLoading } from "hooks/useLoading";
import { DateUtils } from "utils/date.utils";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Popup } from "components";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { Utils } from "utils/utils";
import { CriarUtilizadorPainel } from "./CriarUtilizadorPainel";
import { Filtros } from "./Filtros";
import { Row } from "components/ui/Row";
import { RefreshIcone } from "components/common/icone/RefreshIcone";

export function UtilizadorPainel() {
	const [dataUtilizadores, setdataUtilizadores] = useState(null);
	const [filteredUtilizadores, setFilteredUtilizadores] = useState([]);
	const [isPopupOpen, setisPopupOpen] = useState(false);
	const loading = useLoading();

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		loading.start();
		const data = await ApiRequest.listar("utilizador/simples");
		setdataUtilizadores(data);
		setFilteredUtilizadores(data);
		loading.stop();
	};

	const closePopup = () => {
		setisPopupOpen(false);
	};

	const openPopup = () => {
		setisPopupOpen(true);
	};

	const handleCreated = () => {
		fetchConteudoData();
		setisPopupOpen(false);
	};

	const handleVerifyUser = async (id) => {
		loading.start();
		await ApiRequest.atualizar("utilizador", id, { verificado: true });
		await fetchConteudoData();
		loading.stop();
	};

	const handleManageUserStatus = async (id, isInativar) => {
		loading.start();
		await ApiRequest.atualizar("utilizador", id, { inativo: isInativar });
		await fetchConteudoData();
		loading.stop();
	};

	const handleRefresh = async (id, isInativar) => {
		fetchConteudoData();
	};

	return (
		<>
			{isPopupOpen && (
				<Popup
					headerTitle={"Adicionar Utilizador"}
					onClose={() => closePopup()}
					body={<CriarUtilizadorPainel handleCreated={() => handleCreated()} />}
				/>
			)}
			<Row className="align-content-between justify-content-between">
				<Botao onClick={() => openPopup()}>
					<Icone iconName="PlusLg" type={COMMON_TYPES.INVERSO} />
				</Botao>
			</Row>
			<Filtros data={dataUtilizadores} filtered={filteredUtilizadores} setFiltered={setFilteredUtilizadores} />
			<div className="d-flex justify-content-end mt-4">
				<RefreshIcone handleRefresh={() => handleRefresh()} />
			</div>
			{dataUtilizadores ? (
				<table className="painel-tabela">
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
						{filteredUtilizadores.map((item) => (
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
								<td>
									{item?.inativo ? (
										<Icone iconName="CheckCircleFill" className="sucesso" />
									) : (
										<Icone iconName="XCircleFill" className="perigo" />
									)}
								</td>
								<td>
									{item.verificado ? (
										<Icone iconName="CheckCircleFill" className="sucesso" />
									) : (
										<Icone iconName="XCircleFill" className="perigo" />
									)}
								</td>
								<td>{item.utilizador_perfil.perfil}</td>
								<td>{item.centro ? item?.utilizador_centro?.centro : "Por definir."}</td>
								<td>{DateUtils.DataNormal(item.data_criacao)}</td>
								<td>
									<div className="d-flex gap-2">
										{item?.inativo ? (
											<Botao
												title="Ativar"
												onClick={() => handleManageUserStatus(item.id, false)}
												variant={BUTTON_VARIANTS.PERIGO}
											>
												<Icone iconName="UnlockFill" type={COMMON_TYPES.INVERSO} />
											</Botao>
										) : (
											<Botao
												title="Inativar"
												onClick={() => handleManageUserStatus(item.id, true)}
												variant={BUTTON_VARIANTS.PERIGO}
											>
												<Icone iconName="LockFill" type={COMMON_TYPES.INVERSO} />
											</Botao>
										)}
										{!item.verificado && (
											<Botao
												title="Verificar"
												onClick={() => handleVerifyUser(item.id)}
												variant={BUTTON_VARIANTS.SUCESSO}
											>
												<Icone iconName="Check" type={COMMON_TYPES.INVERSO} />
											</Botao>
										)}
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
