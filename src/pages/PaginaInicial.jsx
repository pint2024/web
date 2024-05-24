import { PequenoPerfil, Tooltip } from "components/index";
import Imagem from "assets/images/placeholder.jpg";

export function PaginaInicial() {
	return (
		<>
			Página Inicial
			<div className="example-wrapper">
				<Tooltip
					content={
						<PequenoPerfil
							imagem={Imagem}
							titulo={"JoazumzinBarbeitaPT2001"}
							subtitulo={"Sou o João e sou o rei deles."}
						/>
					}
					direction="right"
				>oi</Tooltip>
			</div>
		</>
	);
}
