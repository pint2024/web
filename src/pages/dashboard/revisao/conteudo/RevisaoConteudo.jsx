import React from "react";
import "./revisao-conteudo.css";

const data = [
	{ id: 1, data_criacao: "2024-06-05", motivo: "Lorem ipsum", estado: "Ativo", conteudo: "Conteúdo" },
	{ id: 2, data_criacao: "2024-06-04", motivo: "Dolor sit amet", estado: "Inativo", conteudo: "Conteúdo" },
	{ id: 3, data_criacao: "2024-06-03", motivo: "Consectetur adipiscing elit", estado: "Ativo", conteudo: "Comentário" },
];

export function RevisaoConteudo() {
	return (
		<table className="revisao-tabela">
			<thead>
				<tr>
					<th>Motivo</th>
					<th>Data de Criação</th>
					<th>Estado</th>
					<th>Conteudo</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.motivo}</td>
						<td>{item.data_criacao}</td>
						<td>{item.estado}</td>
						<td>{item.conteudo}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
