import { Texto } from "components/ui";
import { Imagem } from "components/ui/imagem/Imagem";

export const PequenoPerfil = ({ imagem, titulo, subtitulo }) => {
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
