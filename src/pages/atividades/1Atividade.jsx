import { Botao, ComboBox } from "components/form";
import { useEffect, useState } from "react";
import { listarRequest } from "api/listarRequest";
import { TopicoDTO } from "dto/topico.dto";
import { DTO } from "dto/dto";
import { waitData } from "utils/utils";
import { useLoading } from "hooks/useLoading";
import { AtividadeDTO } from "dto/atividade.dto";
import { Icon, Divider } from "components/elementos/index";
import { usePopup } from "hooks/usePopup";
import { Post } from "./components/post/1Post";
import { ORDER_OPTIONS } from "data/constants";

export const Atividade = () => {
	const { puSet, puCreate, puOpen } = usePopup();
	const { setLoading } = useLoading();
	const [topicoData, setTopicoData] = useState([]);
	const [topicoFilterOptions, setTopicoFilterOptions] = useState({});
	const [atividadeData, setatividadeData] = useState();

	useEffect(() => {
		const fetchTopicos = async () => {
			const data = await listarRequest("topico");
			console.log(data);
			const topico = DTO.createDTOs(data, TopicoDTO);
			setTopicoData(topico);
		};

		fetchTopicos();
	}, []);

	useEffect(() => {
		const fetchAtividades = async () => {
			const data = await listarRequest("atividade", topicoFilterOptions);
			console.log(data);
			const atividades = DTO.createDTOs(data, AtividadeDTO);
			setatividadeData(atividades);
		};

		fetchAtividades();
	}, [topicoFilterOptions]);

	if (waitData(setLoading, topicoData, atividadeData)) return;

	const filter = (e) => {
		if (e.target.value === "0") setTopicoFilterOptions({});
		else setTopicoFilterOptions({ "$atividade_subtopico.subtopico_topico.id$": e.target.value });
	};

	return (
		<div>
			<section className="d-flex">
				<div>
					<Botao route="criar">
						<Icon iconName="Plus" className="text-types-inverse" />
						Adicionar
					</Botao>
				</div>
				<div className="d-flex justify-content-end gap-2">
					<ComboBox
						placeholder="Recentes"
						options={ORDER_OPTIONS}
					/>
					<ComboBox
						handleChange={filter}
						placeholder="Todos"
						options={topicoData.map((item) => item.getComboBoxData())}
					/>
				</div>
			</section>
			<section>
			<>
				{puCreate()}
				{atividadeData.map((atividade, index) => (
					<>
						<Divider />
						<Post key={index} data={atividade.formattToPost()} />
					</>
				))}
			</>
			</section>
		</div>
	);
};
