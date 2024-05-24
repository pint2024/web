import { Texto, Imagem, Navegar, Tooltip, OverlayPerfil } from "components/index";

export function PequenoPerfil({ imagem, nome, data }) {
	return (
		<>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div>
					<Imagem src={imagem} className="card-user-picture" />
				</div>
				<div className="col" style={{ marginLeft: "8px" }}>
					<Tooltip content={<OverlayPerfil imagem={imagem} nome={nome} tag={data}/>}>
						<Navegar>
							<Texto>{nome}</Texto>
						</Navegar>
					</Tooltip>
					<div>
						<Texto size={0} type="secondary">
							{data}
						</Texto>
					</div>
				</div>
			</div>
		</>
	);
}
