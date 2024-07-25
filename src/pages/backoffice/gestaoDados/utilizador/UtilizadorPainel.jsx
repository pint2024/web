import React, { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { DateUtils } from "utils/date.utils";
import { ApiRequest } from "api/apiRequest";
import { Botao, CaixaTexto, ComboBox, Icone, Popup } from "components";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { Utils } from "utils/utils";
import { CriarUtilizadorPainel } from "./CriarUtilizadorPainel";
import { useInput } from "hooks/useInput";
import { COMBOBOX_DEFAULT_VALUE } from "data/constants";

export function UtilizadorPainel() {
	const searchUser = useInput();
	const searchCentro = useInput();
	const searchPerfil = useInput();
	const [dataUtilizadores, setdataUtilizadores] = useState(null);
	const [filteredUtilizadores, setFilteredUtilizadores] = useState([]);
	const [isPopupOpen, setisPopupOpen] = useState(false);
	const { startLoading, stopLoading } = useCarregando();
	const [dataPerfil, setdataPerfil] = useState(null);

	const [dataCentro, setdataCentro] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		startLoading();
		await fetchCentro();
		await fetchPerfil();
		stopLoading();
	};

	const fetchCentro = async () => {
		const response = await ApiRequest.listar("centro/simples");
		setdataCentro(response);
	};

	const fetchPerfil = async () => {
		const response = await ApiRequest.listar("perfil/simples");
		setdataPerfil(response);
	};

	useEffect(() => {
		if (!dataUtilizadores) return;
		const filtered = dataUtilizadores.filter((user) => {
			const searchValue = searchUser.value.toLowerCase();
			return (
				user.nome.toLowerCase().includes(searchValue) ||
				user.sobrenome.toLowerCase().includes(searchValue) ||
				user.tag.toLowerCase().includes(searchValue) ||
				user.email.toLowerCase().includes(searchValue)
			);
		});

		setFilteredUtilizadores(filtered);
	}, [searchUser.value]);

	useEffect(() => {
		if (!dataUtilizadores) return;
		if (Utils.convertoStrToInt(searchCentro.value) === COMBOBOX_DEFAULT_VALUE) {
			setFilteredUtilizadores(dataUtilizadores);
			return;
		}
		const filtered = dataUtilizadores.filter((user) => {
			const searchValue = Utils.convertoStrToInt(searchCentro.value);
			return user.centro === searchValue;
		});

		setFilteredUtilizadores(filtered);
	}, [searchCentro.value]);

	useEffect(() => {
		if (!dataUtilizadores) return;
		if (Utils.convertoStrToInt(searchPerfil.value) === COMBOBOX_DEFAULT_VALUE) {
			setFilteredUtilizadores(dataUtilizadores);
			return;
		}
		const filtered = dataUtilizadores.filter((user) => {
			const searchValue = Utils.convertoStrToInt(searchPerfil.value);
			return user.perfil === searchValue;
		});

		setFilteredUtilizadores(filtered);
	}, [searchPerfil.value]);

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		const data = await ApiRequest.listar("utilizador/simples");
		setdataUtilizadores(data);
		setFilteredUtilizadores(data);
	};

	if (!dataCentro || !dataPerfil) return;

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
		startLoading();
		await ApiRequest.atualizar("utilizador", id, { verificado: true });
		await fetchConteudoData();
		stopLoading();
	};

	const handleManageUserStatus = async (id, isInativar) => {
		startLoading();
		await ApiRequest.atualizar("utilizador", id, { inativo: isInativar });
		await fetchConteudoData();
		stopLoading();
	};

	const transformarDadosCentro = () => {
		return dataCentro?.map((item) => ({
			value: item.id,
			label: item.centro,
		}));
	};

	const transformarDadosPerfil = () => {
		return dataPerfil?.map((item) => ({
			value: item.id,
			label: item.perfil,
		}));
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
			<Botao onClick={() => openPopup()}>
				<Icone iconName="PlusLg" type={COMMON_TYPES.INVERSO} />
			</Botao>
			<CaixaTexto
				className="mt-2 me-auto"
				handleChange={(e) => searchUser.onChange(e)}
				value={searchUser.value}
				placeholder="Pesquisar utilizador..."
			/>
			<div className="d-flex">
				<ComboBox
					className="mt-2"
					options={transformarDadosCentro()}
					placeholder="Escolha o centro..."
					handleChange={(e) => searchCentro.setValue(e)}
					value={searchCentro.value}
				/>
				<ComboBox
					className="mt-2"
					options={transformarDadosPerfil()}
					placeholder="Escolha o perfil..."
					handleChange={(e) => searchPerfil.setValue(e)}
					value={searchPerfil.value}
				/>
			</div>
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
