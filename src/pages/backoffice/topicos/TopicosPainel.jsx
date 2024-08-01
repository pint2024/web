import React, { useEffect, useState } from "react";
import { DateUtils } from "utils/date.utils";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Popup } from "components";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { Utils } from "utils/utils";
import { CriarTopicoPainel } from "./CriarTopicoPainel";
import { CriarSubtopicoPainel } from "./CriarSubtopicoPainel";

export function TopicosPainel() {
	const [dataTopicos, setdataTopicos] = useState(null);
	const [isPopupTopicoOpen, setisPopupTopicoOpen] = useState(false);
	const [isPopupSubtopicoOpen, setisPopupSubtopicoOpen] = useState(false);

	useEffect(() => {
		fetchConteudoData();
	}, []);

	const fetchConteudoData = async () => {
		const data = await ApiRequest.listar("topico/simples"); // filtra os conteudos apenas
		setdataTopicos(data);
	};

	const handleCreated = () => {
		fetchConteudoData();
		setisPopupTopicoOpen(false);
		setisPopupSubtopicoOpen(false);
	}

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
			{dataTopicos ? (
				<table className="painel-tabela mt-4">
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
