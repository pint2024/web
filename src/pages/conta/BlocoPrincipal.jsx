import { Icon, Texto, Contentor } from "components/index";
import { Link } from "react-router-dom";
import Image from "assets/images/user-default.png";
import "./conta.css";

export function BlocoPrincipal() {
	return (
		<Contentor>
			<div className="main-box-content">
				<div className="mb-content-image">
					<img src={Image} alt="" className="image-size circular-image" />
				</div>
				<div>
					<Texto size={5}>Santos Jaumazin</Texto>
					<Texto size={0}>@santos_jaumazin</Texto>
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
					<div className="details-right">
						<div className="d-flex gap-2">
							<Link>
								<Icon iconName="TwitterX" />
							</Link>
							<Link>
								<Icon iconName="Instagram" />
							</Link>
							<Link>
								<Icon iconName="Linkedin" />
							</Link>
							<Link>
								<Icon iconName="Facebook" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Contentor>
	);
};
