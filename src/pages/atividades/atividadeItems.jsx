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
			<Post
				id={1}
				titulo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
				descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
				date={"à 1h"}
				utilizador={"Joaumzin Gaimeplais"}
			/>
			{atividadeData.map((atividade, index) => (
				<Post key={index} {...atividade.formattToPost()} />
			))}
		</div>
	);
};
