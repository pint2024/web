import { ComboBox } from "components/form/__init__";
import { AtividadeItems } from "./atividadeItems";
import { useEffect, useState } from "react";
import { listarRequest } from "api/listarRequest";
import { TopicoDTO } from "dto/topico.dot";
import { DTO } from "dto/dto";
import { isEmpty } from "utils/utils";
import { useLoading } from "modules/hooks/useLoading";

export const Atividade = () => {
	const [topicoData, setTopicoData] = useState([]);
	const [topicoOptions, setTopicoOptions] = useState([]);
	const { startLoading, stopLoading } = useLoading();

	useEffect(() => {
		const fetchTopicos = async () => {
			const data = await listarRequest("topico");
			const topico = DTO.createDTOs(data, TopicoDTO);
			setTopicoData(topico);
		};

		fetchTopicos();
	}, [topicoOptions]);

	if (isEmpty(topicoData)) {
		startLoading();
		return;
	} else {
		stopLoading();
	}

	const filter = (e) => { // isto tem que ser utilizado no atividadeitems
		/*console.log(e.target.value);
		setTopicoOptions({ id: e.target.value });*/
	};

	return (
		<div>
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
			<AtividadeItems />
		</div>
	);
};
