import React, { useEffect, useState } from "react";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Popup } from "components";
import { COMMON_TYPES } from "data/data";
import { CriarTopicoPainel } from "./CriarTopicoPainel";
import { CriarSubtopicoPainel } from "./CriarSubtopicoPainel";
import { RefreshIcone } from "components/common/icone/RefreshIcone";
import { useLoading } from "hooks/useLoading";

export function TopicosPainel() {
	const [dataTopicos, setdataTopicos] = useState(null);
	const [isPopupTopicoOpen, setisPopupTopicoOpen] = useState(false);
	const [isPopupSubtopicoOpen, setisPopupSubtopicoOpen] = useState(false);
	const loading = useLoading(false);

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		loading.start();
		const data = await ApiRequest.listar("topico/simples");
		setdataTopicos(data);
		loading.stop();
	};

	const handleCreated = () => {
		fetchConteudoData();
		setisPopupTopicoOpen(false);
		setisPopupSubtopicoOpen(false);
	};

	const handleRefresh = () => {
		fetchConteudoData();
	};

	return (
		<>
			{isPopupTopicoOpen && (
				<Popup
					headerTitle={"Adicionar Topico"}
					onClose={() => setisPopupTopicoOpen(false)}
					body={<CriarTopicoPainel handleCreated={() => handleCreated()} />}
				/>
			)}
			{isPopupSubtopicoOpen && (
				<Popup
					headerTitle={"Adicionar Subtopico"}
					onClose={() => setisPopupSubtopicoOpen(false)}
					body={<CriarSubtopicoPainel handleCreated={() => handleCreated()} />}
				/>
			)}
			<div className="d-flex align-items-center gap-3">
				<Botao onClick={() => setisPopupTopicoOpen(true)}>
					<Icone iconName="PlusLg" type={COMMON_TYPES.INVERSO} />
					Adicionar Tópico
				</Botao>
				<Botao onClick={() => setisPopupSubtopicoOpen(true)}>
					<Icone iconName="PlusLg" type={COMMON_TYPES.INVERSO} />
					Adicionar Subtópico
				</Botao>
			</div>
			<div className="d-flex justify-content-end mt-4">
				<RefreshIcone handleRefresh={() => handleRefresh()} />
			</div>
			{dataTopicos ? (
				<table className="painel-tabela">
					<thead>
						<tr>
							<th>Tópico</th>
							<th>Subtópico</th>
						</tr>
					</thead>
					<tbody>
						{dataTopicos.map((item) => (
							<React.Fragment key={item.id}>
								<tr key={item.id}>
									<td>{item.topico}</td>
									<td>
										{item.subtopico_topico.map((subItem, index) => (
											<React.Fragment key={subItem.id}>
												{subItem.area}
												{index !== item.subtopico_topico.length - 1 && ", "}
											</React.Fragment>
										))}
									</td>
								</tr>
							</React.Fragment>
						))}
					</tbody>
				</table>
			) : (
				<p>Carregando...</p>
			)}
		</>
	);
}
