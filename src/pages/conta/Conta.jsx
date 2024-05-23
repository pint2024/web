import { BlocoPrincipal } from "./BlocoPrincipal";
import { BlocoAtividade } from "./BlocoAtividade";
import { BlocoEventos } from "./BlocoEventos";
import { BlocoEstatisticas } from "./BlocoEstatisticas";
import { BlocoComentarios } from "./BlocoComentario";

export const Conta = () => {
	return (
		<div>
			<BlocoPrincipal />
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
