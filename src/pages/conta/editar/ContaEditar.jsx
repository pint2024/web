import { ApiRequest } from "api";
import { Imagem } from "components";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UtilizadorDefault from "assets/images/user-default.png";

export function ContaEditar() {
	const { id } = useParams();
	const [dataConta, setdataConta] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		startLoading();
		await fetchContaData();
		stopLoading();
	};

	const fetchContaData = async () => {
		const data = await ApiRequest.obter("utilizador", id);
		setdataConta(data);
	};

	if (!dataConta) return;

	return (
		<>
			<Imagem src={dataConta.imagem ? dataConta.imagem : UtilizadorDefault} className="image-size circular-image" />
		</>
	);
}
