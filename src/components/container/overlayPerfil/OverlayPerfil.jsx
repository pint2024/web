import { Texto, Imagem } from "components/index";

export function OverlayPerfil({ imagem, nome, tag }) {
	return (
		<>
				<div>
					<Imagem src={imagem} className="card-user-picture" />
				</div>
				<div className="col">
					<div>
						<Texto>{nome}</Texto>
					</div>
					<div>
						<Texto size={0} type="secondary">
							{tag}
						</Texto>
					</div>
				</div>
		</>
	);
}
