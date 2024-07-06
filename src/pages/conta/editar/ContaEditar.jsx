import { ApiRequest } from "api";
import { Botao, ImageBox, Imagem } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UtilizadorDefault from "assets/images/user-default.png";
import { useUserValidation } from "hooks/useAuth";
import { Validador } from "utils/validator";

export function ContaEditar() {
	const { id } = useParams();
	const [dataConta, setdataConta] = useState(null);
	const [newImagens, setnewImagens] = useState([]);
	const [erros, setErros] = useState([]);
	const { startLoading, stopLoading } = useCarregando();
	const utilizadorAtual = useUserValidation();

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

	const handleImageUpload = async () => {
		const esquema = {
			imagem: { required: true },
		};

		const validador = new Validador(esquema);
		const data = {
			imagem: newImagens,
		};

		const validacao = validador.validar(data);
		setErros(validacao);
		if (!validador.isValido(validacao)) return;

		console.log(newImagens);

		startLoading();
		await ApiRequest.upload_user_image(utilizadorAtual.id, newImagens);
		await fetchData();
		stopLoading();
	};

	if (!dataConta) return;

	return (
		<>
			<Imagem src={dataConta.imagem ? dataConta.imagem : UtilizadorDefault} className="image-size circular-image" />
			<ImageBox handleChange={setnewImagens} />
			<Botao onClick={handleImageUpload}>Upload</Botao>
		</>
	);
}
