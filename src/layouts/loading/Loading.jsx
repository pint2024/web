import React from "react";
import "./loading.css"; // Vamos atualizar este ficheiro CSS
import { Imagem } from "components";
import { LOGO } from "data/constants";

export const Loading = () => {
	return (
		<div className="loading-container loading-operation">
			<div className="spinner">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
			<Imagem src={LOGO} className="loading-logo" />
		</div>
	);
};
