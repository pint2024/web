import { Texto } from "components/elementos"
import "./conta.css"
import Image from "assets/images/image.png"

export const Conta = () => {
	return (
		<div>
			<div className="main-box">
				<div className="main-box-content">
					<div className="mb-content-image">
						<img src={Image} alt="" className="image-size circular-image" />
					</div>
					<div>
						<Texto size={5}>Santos Jaumazin</Texto>
					</div>
					<div className="content-details">
						<div>
							<Texto>Localização: Portugal</Texto>
						</div>
						<div>
							<Texto>Sede: Viseu</Texto>
						</div>
						<div>
							<Texto>Interesses: Desporto, Saúde...</Texto>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}