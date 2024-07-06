import { ApiRequest } from "api";
import { Categoria } from "components/container/categorias/Categoria";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";

export function InteressesList({ id }) {
	const [dataSubtopicos, setdataSubtopicos] = useState(null);
	const [dataInteresses, setdataInteresses] = useState(null);
	const [selectedSubtopicos, setselectedSubtopicos] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (dataInteresses) getSelectedSubtopicos();
	}, [dataInteresses]);

	const fetchData = async () => {
		startLoading();
		await fetchSubtopicoData();
		await fetchUserInteressesData();
		stopLoading();
	};

	const fetchSubtopicoData = async () => {
		const data = await ApiRequest.listar("subtopico");
		setdataSubtopicos(data);
	};

	const fetchUserInteressesData = async () => {
		const data = await ApiRequest.listar("interesse", { utilizador: id });
		setdataInteresses(data);
	};

	const getSelectedSubtopicos = () => {
		const selInt = [];

		dataInteresses.forEach((interesse) => {
			selInt.push(interesse?.interesse_subtopico?.id);
		});

		setselectedSubtopicos(selInt);
	};

	if (!dataSubtopicos || !selectedSubtopicos || !dataSubtopicos) return;

	const handleCategoryClick = (isActive, id) => {
		console.log(isActive, id);
	};

	return (
		<>
			{dataSubtopicos.map((interesse) => (
				<Categoria
					id={interesse.id}
					category={interesse.area}
					value={selectedSubtopicos.includes(interesse.id)}
					handleChange={(isActive, id) => handleCategoryClick(isActive, id)}
				/>
			))}
		</>
	);
}
