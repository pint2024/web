import { Icon, Texto, Contentor, Botao, Navegar } from "components/index";
import { Link } from "react-router-dom";
import Image from "assets/images/user-default.png";
import "./conta.css";
import { BUTTON_VARIANTS, COMMON_SIZES } from "data/data";

export function BlocoPrincipal() {
	


	return (
		<Contentor>
			<div className="main-box-content">
				<div className="mb-content-image">
					<img src={Image} alt="" className="image-size circular-image" />
				</div>
				<div>
					<Texto size={COMMON_SIZES.FS5}>Santos Jaumazin</Texto>
					<Texto size={COMMON_SIZES.FS0}>@santos_jaumazin</Texto>
				</div>
				<div className="content-details d-flex justify-content-between mt-3">
					<div className="details-left">
						<div className="d-flex gap-3">
							<div className="d-flex align-items-center gap-2">
								<Texto className="d-flex gap-1 align-items-center">
									<Icon iconName="PinMap" />
									Portugal
								</Texto>
							</div>
							<div className="d-flex align-items-center gap-2">
								<Texto className="d-flex gap-1 align-items-center">
									<Icon iconName="Buildings" />
									Viseu
								</Texto>
							</div>
						</div>
						<div className="d-flex align-items-center gap-2">
							<Texto className="d-flex gap-1 align-items-center">
								<Icon iconName="HandThumbsUp" />
								Desporto, Saúde...
							</Texto>
						</div>
						<div className="d-flex align-items-center gap-2">
							<Texto className="d-flex gap-1 align-items-center">
								<Icon iconName="Calendar3" />
								01/01/2024
							</Texto>
						</div>
					</div>
					<div className="details-right d-flex flex-column align-items-end gap-2">
						<div className="d-flex gap-3">
							<Botao variant={BUTTON_VARIANTS.SECUNDARIO}>Tópicos</Botao>
							<Botao route={"editar"}>Editar</Botao>
						</div>
						<div className="d-flex gap-3 ">
							<Navegar to={'https://www.twitter.com'}>
								<Icon size={COMMON_SIZES.FS4} iconName="TwitterX" />
							</Navegar>
							<Navegar to={'https://www.instagram.com'}>
								<Icon size={COMMON_SIZES.FS4} iconName="Instagram" />
							</Navegar>
							<Navegar to={'https://www.linkedin.com'}>
								<Icon size={COMMON_SIZES.FS4} iconName="Linkedin" />
							</Navegar>
							<Navegar to={'https://www.facebook.com'}>
								<Icon size={COMMON_SIZES.FS4} iconName="Facebook" />
							</Navegar>
						</div>
					</div>
				</div>
			</div>
		</Contentor>
	);
};
