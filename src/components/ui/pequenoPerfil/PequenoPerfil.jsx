import { Texto, Imagem } from "components/index";

export function PequenoPerfil({ imagem, titulo, subtitulo }) {
	return (
		<>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div>
					<Imagem src={imagem} className="card-user-picture" />
				</div>
				<div className="col" style={{ marginLeft: "8px" }}>
					<div>
						<Texto>{titulo}</Texto>
					</div>
					<div>
						<Texto size={0} type="secondary">
							{subtitulo}
						</Texto>
					</div>
				</div>
			</div>
		</>
	);
};
