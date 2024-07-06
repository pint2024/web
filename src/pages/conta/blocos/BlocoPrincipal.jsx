import { Icone, Texto, Contentor, Botao, Navegar, Imagem, Popup } from "components/index";
import { BUTTON_VARIANTS, COMMON_SIZES } from "data/data";
import { DateUtils } from "utils/date.utils";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import UtilizadorDefault from "assets/images/user-default.png";
import "../conta.css";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { LabelError } from "layouts/labelWarnings/LabelError";
import { useState } from "react";
import { InteressesList } from "../InteressesList";
import { useUserValidation } from "hooks/useAuth";

export function BlocoPrincipal({ data }) {
	const [isPopupOpen, setisPopupOpen] = useState(false);
	const utilizadorAtual = useUserValidation();

	const getInteresses = () => {
		let interesses = "";
		for (let interesse of data.interesse_utilizador) {
			interesses += interesse.interesse_subtopico.area + ", ";
		}
		return interesses;
	};

	return (
		<Contentor>
			{isPopupOpen && (
				<Popup
					headerTitle={"Adicionar Utilizador"}
					onClose={() => setisPopupOpen(false)}
					body={<InteressesList id={data.id} />}
				/>
			)}
			{data.inativo && <LabelError texto="Utilizador está inativo!" />}
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
									{data.utilizador_centro.centro}
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
						{utilizadorAtual.id === data.id && (
							<div className="d-flex gap-3">
								<Botao variant={BUTTON_VARIANTS.SECUNDARIO} onClick={() => setisPopupOpen(true)}>
									Interesses
								</Botao>
								<Botao route={"editar"}>Editar</Botao>
							</div>
						)}
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
