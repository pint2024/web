import React, { useEffect, useState } from "react";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Popup } from "components";
import { COMMON_TYPES } from "data/data";
import { CriarCentroPainel } from "./CriarCentroPainel";

export function CentroPainel() {
	const [dataCentro, setdataCentro] = useState(null);
	const [isPopupOpen, setisPopupOpen] = useState(false);

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		const data = await ApiRequest.listar("centro/simples");
		setdataCentro(data);
	};

	const handleCreated = () => {
		fetchConteudoData();
		setisPopupOpen(false);
	}

	return (
		<>
			{isPopupOpen && (
				<Popup
					headerTitle={"Adicionar Topico"}
					onClose={() => setisPopupOpen(false)}
					body={<CriarCentroPainel handleCreated={() => handleCreated()} />}
				/>
			)}
			<div className="d-flex align-items-center gap-3">
				<Botao onClick={() => setisPopupOpen(true)}>
					<Icone iconName="PlusLg" type={COMMON_TYPES.INVERSO} />
					Adicionar Centro
				</Botao>
			</div>
			{dataCentro ? (
				<table className="painel-tabela mt-4">
					<thead>
						<tr>
							<th>Centro</th>
						</tr>
					</thead>
					<tbody>
						{dataCentro.map((item) => (
							<tr key={item.id}>
								<td>{item.centro}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Carregando...</p>
			)}
		</>
	);
}
