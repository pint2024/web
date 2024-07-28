import { Icone, Texto, Contentor, Botao, Navegar, Imagem, Popup, ComboBox } from "components/index";
import { BUTTON_VARIANTS, COMMON_SIZES } from "data/data";
import { DateUtils } from "utils/date.utils";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import UtilizadorDefault from "assets/images/placeholders/user-default.png";
import "../conta.css";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { LabelError } from "layouts/labelWarnings/LabelError";
import { useEffect, useState } from "react";
import { InteressesList } from "../InteressesList";
import { useCurrentUser } from "hooks/useCurrentUser";
import { ApiRequest } from "api";
import { useCarregando } from "hooks/useCarregando";
import { Authorizor } from "components/helpers/Authorizor";
import { EnumConstants } from "data/enum.constants";

export function BlocoPrincipal({ data }) {
	const [isPopupOpen, setisPopupOpen] = useState(false);
	const [dataPerfis, setdataPerfis] = useState();
	const [selectPerfil, setselectPerfil] = useState();
	const [dataCentro, setdataCentro] = useState();
	const [selectCentro, setselectCentro] = useState();
	const { startLoading, stopLoading } = useCarregando();
	const utilizadorAtual = useCurrentUser();

	useEffect(() => {
		setselectPerfil(data?.perfil);
		setselectCentro(data?.centro);
	}, []);

	useEffect(() => {
		handleUpdatePerfil();
	}, [selectPerfil]);

	useEffect(() => {
		handleUpdateCentro();
	}, [selectCentro]);

	useEffect(() => {
		handleFetchData();
	}, []);

	const handleUpdatePerfil = async () => {
		startLoading();
		await ApiRequest.atualizar("utilizador", data.id, { perfil: selectPerfil });
		stopLoading();
	};

	const handleUpdateCentro = async () => {
		startLoading();
		await ApiRequest.atualizar("utilizador", data.id, { centro: selectCentro });
		stopLoading();
	};

	const handleFetchData = async () => {
		startLoading();
		await handleFetchPerfil();
		await handleFetchCentro();
		stopLoading();
	};

	const handleFetchPerfil = async () => {
		const data = await ApiRequest.listar("perfil/simples");
		setdataPerfis(data);
	};

	const handleFetchCentro = async () => {
		const data = await ApiRequest.listar("centro/simples");
		setdataCentro(data);
	};

	const getInteresses = () => {
		let interesses = "";
		for (let interesse of data.interesse_utilizador) {
			interesses += interesse.interesse_subtopico.area + ", ";
		}
		return interesses;
	};

	if (!dataPerfis || !dataCentro) return;

	const transformarDadosPerfil = () => {
		return dataPerfis?.map((item) => ({
			value: item.id,
			label: item.perfil,
		}));
	};

	const transformarDadosCentro = () => {
		return dataCentro?.map((item) => ({
			value: item?.id,
			label: item?.centro,
		}));
	};

	return (
		<Contentor>
			{isPopupOpen && (
				<Popup
					headerTitle={"Adicionar Interesses"}
					onClose={() => setisPopupOpen(false)}
					body={<InteressesList id={data.id} />}
				/>
			)}
			{data?.inativo && <LabelError texto="Utilizador está inativo!" />}
			<div className="main-box-content">
				<div className="mb-content-image">
					<ImagemModal imagemSelecionada={data.imagem ? data.imagem : UtilizadorDefault}>
						<ImagemUtilizador src={data.imagem} className="image-size circular-image" />
					</ImagemModal>
				</div>
				<div>
					<Texto size={COMMON_SIZES.FS5}>{data.nome + " " + data.sobrenome}</Texto>
					<Texto size={COMMON_SIZES.FS0}>{"@" + data.tag}</Texto>
				</div>
				<div className="content-details d-flex justify-content-between mt-3">
					<div className="details-left">
						<div className="d-flex align-items-center gap-2">
							<Texto className="d-flex gap-1 align-items-center">
								<Icone iconName="Calendar3" />
								{DateUtils.MesNome_Ano(data.data_criacao)}
							</Texto>
						</div>
						<div className="d-flex gap-3">
							<div className="d-flex align-items-center gap-2">
								<Texto className="d-flex gap-1 align-items-center">
									<Icone iconName="Buildings" />
									{data.utilizador_centro?.centro}
								</Texto>
							</div>
						</div>
						<div className="d-flex align-items-center gap-2">
							<Texto className="d-flex gap-1 align-items-center">
								<Icone iconName="HandThumbsUp" />
								{getInteresses()}
							</Texto>
						</div>
					</div>
					<div className="details-right d-flex flex-column align-items-end gap-2">
						<div className="d-flex gap-3">
							<Authorizor requiredPermission={EnumConstants.ROLES.ADMIN.ID}>
								<ComboBox
									options={transformarDadosPerfil()}
									placeholder="Escolha o perfil..."
									handleChange={(e) => setselectPerfil(e)}
									value={selectPerfil}
								/>
							</Authorizor>
							{utilizadorAtual.id === data.id && (
								<>
									<ComboBox
										options={transformarDadosCentro()}
										placeholder="Escolha o centro..."
										handleChange={(e) => setselectCentro(e)}
										value={selectCentro}
									/>
									<Botao variant={BUTTON_VARIANTS.SECUNDARIO} onClick={() => setisPopupOpen(true)}>
										Interesses
									</Botao>
									<Botao route={"editar"}>Editar</Botao>
								</>
							)}
						</div>
						<div className="d-flex gap-3 ">
							{data.instagram && (
								<Navegar to={data.instagram} target="_blank">
									<Icone size={COMMON_SIZES.FS4} iconName="Instagram" />
								</Navegar>
							)}
							{data.linkedin && (
								<Navegar to={data.linkedin} target="_blank">
									<Icone size={COMMON_SIZES.FS4} iconName="Linkedin" />
								</Navegar>
							)}
							{data.facebook && (
								<Navegar to={data.facebook} target="_blank">
									<Icone size={COMMON_SIZES.FS4} iconName="Facebook" />
								</Navegar>
							)}
						</div>
					</div>
				</div>
			</div>
		</Contentor>
	);
}
