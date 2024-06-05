import { Texto, Imagem, Navegar, Tooltip, OverlayPerfil } from "components/index";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";

export function PequenoPerfil({ id, imagem, nome, data }) {
	return (
		<>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div>
					<Imagem src={imagem} className="card-user-picture" />
				</div>
				<div className="col" style={{ marginLeft: "8px" }}>
					<Tooltip content={<OverlayPerfil imagem={imagem} nome={nome} tag={data}/>}>
						<Navegar to={`/conta/${id}`}>
							<Texto>{nome}</Texto>
						</Navegar>
					</Tooltip>
					<div>
						<Texto size={COMMON_SIZES.FS0} type={COMMON_TYPES.SECUNDARIO}>
							{data}
						</Texto>
					</div>
				</div>
			</div>
		</>
	);
}
