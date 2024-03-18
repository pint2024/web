import { useEffect, useState } from "react";
import { listarRequest } from "api/listarRequest";
import Post from "components/cartao/post";
import { PLACEHOLDER_TEXT } from "data/constants";
import { AtividadeDTO } from "dto/atividade.dto";
import { useLoading } from "modules/hooks/useLoading";
import { DTO } from "dto/dto";
import { isEmpty } from "utils/utils";
import { usePopup } from "modules/hooks/usePopup";

export const AtividadeItems = () => {
	const { startLoading, stopLoading } = useLoading();
	const [atividadeData, setatividadeData] = useState();
	const { puSet, puCreate, puOpen } = usePopup();

	useEffect(() => {
		const fetchAtividades = async () => {
			const data = await listarRequest("atividade");
			const atividades = DTO.createDTOs(data, AtividadeDTO);
			setatividadeData(atividades);
			console.log(atividades)
			stopLoading();
		};

		fetchAtividades();
	}, []);

	if (isEmpty(atividadeData)) {
		startLoading();
		return;
	}

	return (
		<div>
			{puCreate()}
			{atividadeData.map((atividade, index) => (
				<Post key={index} {...atividade.formattToPost()} />
			))}
		</div>
	);
};
