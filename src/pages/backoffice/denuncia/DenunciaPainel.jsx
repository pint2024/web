import { ApiRequest } from "api";
import { RefreshIcone } from "components/common/icone/RefreshIcone";
import { useLoading } from "hooks/useLoading";
import { useEffect } from "react";
import { useState } from "react";

const data = [
	{
		id: 1,
		data_criacao: "2024-06-05",
		motivo: "Lorem ipsum",
		estado: "Ativo",
		comentario: "Dolor sit amet",
		utilizador: "@lmsebastiao",
	},
	{
		id: 2,
		data_criacao: "2024-06-04",
		motivo: "Dolor sit amet",
		estado: "Inativo",
		comentario: "Lorem ipsum",
		utilizador: "@jsantos",
	},
	{
		id: 3,
		data_criacao: "2024-06-03",
		motivo: "Consectetur adipiscing elit",
		estado: "Ativo",
		comentario: "Consectetur adipiscing elit",
		utilizador: "@fmeneses",
	},
];
export function DenunciaPainel() {
	const [dataDenuncias, setDataDenuncias] = useState([]);
	const loading = useLoading();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		loading.start();
		const data = await ApiRequest.listar("denuncia");
		setDataDenuncias(data);
		console.log(data);
		loading.stop();
	}
	
	const handleRefresh = () => {};

	return (
		<>
			<div className="d-flex justify-content-end mt-4">
				<RefreshIcone handleRefresh={() => handleRefresh()} />
			</div>
			<table className="painel-tabela">
				<thead>
					<tr>
						<th>Motivo</th>
						<th>Data de Criação</th>
						<th>Estado</th>
						<th>Comentario</th>
						<th>Denunciante</th>
						<th>Denunciante</th>
					</tr>
				</thead>
				<tbody>
					{dataDenuncias.map((item) => (
						<tr key={item.id}>
							<td>{item.motivo}</td>
							<td>{item.data_criacao}</td>
							<td>{item.denuncia_estado.estado}</td>
							<td>{item.denuncia_comentario.comentario}</td>
							<td>@{item.denuncia_comentario.comentario_utilizador.tag}</td>
							<td>@{item.denuncia_utilizador.tag}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
