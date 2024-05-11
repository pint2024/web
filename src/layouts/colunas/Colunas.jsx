import React, { useState } from "react";

const Colunas = ({ colunasIniciais = [] }) => {
	const [colunas, setColunas] = useState(colunasIniciais);

	const adicionarColuna = () => {
		setColunas([...colunas, []]);
	};

	const adicionarItem = (colunaIndex, item) => {
		const novasColunas = [...colunas];
		novasColunas[colunaIndex] = [...novasColunas[colunaIndex], item];
		setColunas(novasColunas);
	};

	return (
		<div className="row">
			{colunas.map((coluna, colunaIndex) => (
				<div key={colunaIndex} className="col">
					<div className="coluna">
						{coluna.map((item, itemIndex) => (
							<div key={itemIndex} className="item">
								{item}
							</div>
						))}
					</div>
					<button onClick={() => adicionarItem(colunaIndex, <div>Novo item</div>)}>Adicionar Item</button>
				</div>
			))}
			<div className="col">
				<button onClick={adicionarColuna}>Adicionar Coluna</button>
			</div>
		</div>
	);
};

export default Colunas;
