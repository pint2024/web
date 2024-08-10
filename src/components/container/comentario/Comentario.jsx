import { Dropdown, Icone, Imagem } from "components/index";
import "./comentario.css";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { DateUtils } from "utils/date.utils";
import { ApiRequest } from "api";

export function Comentario({ utilizador, comentario, dropdownItems }) {
console.log(dropdownItems)
	return (
		<div className="card mb-2" key={comentario.id}>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="d-flex align-items-center">
						<img
							src={utilizador.imagem}
							alt="Avatar"
							className="rounded-circle me-2"
							style={{ width: "40px", height: "40px" }}
						/>
						<div>
							<strong>@{utilizador.tag}</strong>
							<p className="text-muted small mb-1">{DateUtils.DataRelativa(comentario.data_criacao)}</p>
						</div>
					</div>
					<div>
						{dropdownItems && (
							<Dropdown items={dropdownItems}>
								<Icone iconName="ThreeDotsVertical" className="icon-hover" />
							</Dropdown>
						)}
					</div>
				</div>
				<p className="card-text mt-2">{comentario.comentario}</p>
			</div>
		</div>
	);
}
