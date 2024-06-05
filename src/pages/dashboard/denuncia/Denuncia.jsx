import React from "react";
import "./denuncia.css";

const data = [
	{ id: 1, data_criacao: "2024-06-05", motivo: "Lorem ipsum", estado: "Ativo", comentario: "Dolor sit amet", utilizador: "@lmsebastiao" },
	{ id: 2, data_criacao: "2024-06-04", motivo: "Dolor sit amet", estado: "Inativo", comentario: "Lorem ipsum", utilizador: "@jsantos" },
	{ id: 3, data_criacao: "2024-06-03", motivo: "Consectetur adipiscing elit", estado: "Ativo", comentario: "Consectetur adipiscing elit", utilizador: "@fmeneses" },
];
export function Denuncia() {
	return (
		<table className="denuncia-tabela">
			<thead>
				<tr>
					<th>Motivo</th>
					<th>Data de Criação</th>
					<th>Estado</th>
					<th>Comentario</th>
					<th>Utilizador</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.motivo}</td>
						<td>{item.data_criacao}</td>
						<td>{item.estado}</td>
						<td>{item.comentario}</td>
						<td>{item.utilizador}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
