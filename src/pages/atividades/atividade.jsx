import { Botao, ComboBox } from "components/form/__init__";
import { AtividadeItems } from "./atividadeItems";
import { useEffect, useState } from "react";
import { listarRequest } from "api/listarRequest";
import { TopicoDTO } from "dto/topico.dot";
import { DTO } from "dto/dto";
import { waitData } from "utils/utils";
import { useLoading } from "modules/hooks/useLoading";
import { AtividadeDTO } from "dto/atividade.dto";
import { Icon } from "components/icons/icon";

export const Atividade = () => {
	const [topicoData, setTopicoData] = useState([]);
	const [topicoFilterOptions, setTopicoFilterOptions] = useState({});
	const { setLoading } = useLoading();
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
						options={[
							{ label: "Mais Gostos", value: "1" },
							{ label: "Mais Comentários", value: "2" },
						]}
					/>
					<ComboBox
						handleChange={filter}
						placeholder="Todos"
						options={topicoData.map((item) => item.getComboBoxData())}
					/>
				</div>
			</section>
			<section>
				<AtividadeItems data={atividadeData} />
			</section>
		</div>
	);
};
