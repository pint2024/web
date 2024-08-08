import { ApiRequest } from "api";
import { RefreshIcone } from "components/common/icone/RefreshIcone";
import { useLoading } from "hooks/useLoading";
import { useEffect } from "react";
import { useState } from "react";

export function DenunciaPainel() {
	const [dataDenuncias, setDataDenuncias] = useState([]);
	const loading = useLoading();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [dataDenuncias]);

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
						<tr id={`denuncia-${item.id}`} key={item.id}>
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
