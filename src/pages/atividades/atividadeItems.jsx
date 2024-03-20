import { useEffect, useState } from "react";
import { listarRequest } from "api/listarRequest";
import Post from "components/cartao/post";
import { AtividadeDTO } from "dto/atividade.dto";
import { useLoading } from "modules/hooks/useLoading";
import { DTO } from "dto/dto";
import { isEmpty } from "utils/utils";
import { usePopup } from "modules/hooks/usePopup";

export const AtividadeItems = ({ data }) => {
	const { puSet, puCreate, puOpen } = usePopup();
	

	return (
		<div>
			{puCreate()}
			{data.map((atividade, index) => (
				<Post key={index} {...atividade.formattToPost()} />
			))}
		</div>
	);
};
