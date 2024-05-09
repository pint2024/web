import { Texto } from "components/elementos";
import React from "react";

export function NotFound() {
	return (
		<section>
			<div className="d-flex gap-3">
				<Texto size={6} type="danger">
					404
				</Texto>
				<Texto size={6}>Pagina não foi encontrada</Texto>
			</div>
			<p className="lead">O que estas aqui a fazer mongoloide? Vai po caralho</p>
		</section>
	);
}
