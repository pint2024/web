import { Icone, Texto, Contentor, Botao, Navegar, Imagem } from "components/index";
import { BUTTON_VARIANTS, COMMON_SIZES } from "data/data";
import { DateUtils } from "utils/date.utils";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import UtilizadorDefault from "assets/images/user-default.png"
import "../conta.css";

export function BlocoPrincipal({ data }) {
	const imagemUtilizador = data.imagem ? data.imagem : UtilizadorDefault;

	const getInteresses = () => {
		let interesses = "";
		for (let interesse of data.interesse_utilizador) {
			interesses += interesse.interesse_subtopico.area + " ";
		}
		return interesses;
	};

	return (
		<Contentor>
			<div className="main-box-content">
				<div className="mb-content-image">
					<ImagemModal imagemSelecionada={imagemUtilizador}>
						<Imagem src={imagemUtilizador} className="image-size circular-image" />
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
						<div className="d-flex gap-3">
							<Botao variant={BUTTON_VARIANTS.SECUNDARIO}>Interesses</Botao>
							<Botao route={"editar"}>Editar</Botao>
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