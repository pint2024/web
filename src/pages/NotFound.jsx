import Texto from "components/texto/texto";
import React from "react";

export function NotFound() {
	return (
		<section>
			<div className="d-flex gap-3">
				<Texto size={5} type="danger">
					404
				</Texto>
				<Texto size={5}>Pagina não foi encontrada</Texto>
			</div>
			<p className="lead">O que estas aqui a fazer mongoloide? Vai po caralho</p>
		</section>
	);
}
