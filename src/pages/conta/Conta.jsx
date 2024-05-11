import { BlocoDetalhe } from "./blocos/BlocoDetalhe";
import { BlocoAtividade } from "./blocos/BlocoAtividade";
import { BlocoEventos } from "./blocos/BlocoEventos";
import { BlocoEstatisticas } from "./blocos/BlocoEstatisticas";
import { BlocoComentarios } from "./blocos/BlocoComentario";

export const Conta = () => {
	return (
		<div>
			<BlocoDetalhe />
			<div className="mt-3">
				<BlocoAtividade />
			</div>
			<div className="mt-3">
				<BlocoEventos />
			</div>
			<div className="mt-3">
				<BlocoEstatisticas />
			</div>
			<div className="mt-3">
				<BlocoComentarios />
			</div>
		</div>
	);
};
