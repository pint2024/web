import React from "react";
import "./revisao-comentario.css";

const data = [
	{ id: 1, data_criacao: "2024-06-05", motivo: "Lorem ipsum", estado: "Ativo", comentario: "Conteúdo" },
	{ id: 2, data_criacao: "2024-06-04", motivo: "Dolor sit amet", estado: "Inativo", comentario: "Conteúdo" },
	{ id: 3, data_criacao: "2024-06-03", motivo: "Consectetur adipiscing elit", estado: "Ativo", comentario: "Comentário" },
];

export function RevisaoComentario() {
	return (
		<table className="revisao-tabela">
			<thead>
				<tr>
					<th>Motivo</th>
					<th>Data de Criação</th>
					<th>Estado</th>
					<th>Comentário</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.motivo}</td>
						<td>{item.data_criacao}</td>
						<td>{item.estado}</td>
						<td>{item.comentario}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
