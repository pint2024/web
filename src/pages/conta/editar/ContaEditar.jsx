import { ApiRequest } from "api";
import { Botao, CaixaTexto, ImageBox, Imagem } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UtilizadorDefault from "assets/images/user-default.png";
import { useUserValidation } from "hooks/useAuth";
import { Validador } from "utils/validator";
import { Utils } from "utils/utils";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";

export function ContaEditar() {
	const { id } = useParams();
	const { startLoading, stopLoading } = useCarregando();
	const { userData, isValid } = useUserValidation(true);
	const navigate = useNavigate();
	const [erros, setErros] = useState([]);

	const [dataConta, setdataConta] = useState(null);
	const [newImagens, setnewImagens] = useState([]);
	const [formNome, setformNome] = useState([]);
	const [formSobrenome, setformSobrenome] = useState([]);
	const [formLinkedin, setformLinkedin] = useState([]);
	const [formInstagram, setformInstagram] = useState([]);
	const [formFacebook, setformFacebook] = useState([]);

	useEffect(() => {
		if (!isValid) return;
		if (userData.id !== Utils.convertoStrToInt(id)) {
			navigate("/");
		}
	}, [userData, isValid, id]);

	useEffect(() => {
		if (!dataConta) return;
		setnewImagens(dataConta.imagem);
		setformNome(dataConta.nome);
		setformSobrenome(dataConta.sobrenome);
		setformLinkedin(dataConta.linkedin);
		setformInstagram(dataConta.instagram);
		setformFacebook(dataConta.facebook);
	}, [dataConta]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		startLoading();
		await fetchContaData();
		stopLoading();
	};

	const fetchContaData = async () => {
		const data = await ApiRequest.obter("utilizador/simples", id);
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

		startLoading();
		await ApiRequest.upload_user_image(userData.id, newImagens);
		await fetchData();
		stopLoading();
	};

	const handleDataAtualizar = async () => {
		const esquema = {
			nome: { required: true },
			sobrenome: { required: true },
			linkedin: { required: true },
			instagram: { required: true },
			facebook: { required: true },
		};

		const validador = new Validador(esquema);
		const data = {
			nome: formNome,
			sobrenome: formSobrenome,
			linkedin: formLinkedin,
			instagram: formInstagram,
			facebook: formFacebook,
		};

		const validacao = validador.validar(data);
		setErros(validacao);
		if (!validador.isValido(validacao)) return;

		startLoading();
		await ApiRequest.atualizar("utilizador", userData.id, data);
		await fetchData();
		stopLoading();
	};

	if (!dataConta || !userData) return;

	return (
		<>
			<div>
				<ImagemUtilizador src={newImagens} className="image-size circular-image" />
				<div className="d-flex">
					<ImageBox handleChange={setnewImagens} />
					<Botao onClick={handleImageUpload}>Upload</Botao>
				</div>
			</div>
			<div>
				<CaixaTexto
					className="mt-2 me-auto"
					handleChange={(e) => setformNome(e.target.value)}
					value={formNome}
					isInvalid={erros.nome}
					label="Nome"
				/>
				<CaixaTexto
					className="mt-2 me-auto"
					handleChange={(e) => setformSobrenome(e.target.value)}
					value={formSobrenome}
					isInvalid={erros.sobrenome}
					label="Sobrenome"
				/>
				<CaixaTexto
					className="mt-2 me-auto"
					handleChange={(e) => setformLinkedin(e.target.value)}
					value={formLinkedin}
					isInvalid={erros.linkedin}
					label="Linkedin"
				/>
				<CaixaTexto
					className="mt-2 me-auto"
					handleChange={(e) => setformFacebook(e.target.value)}
					value={formFacebook}
					isInvalid={erros.facebook}
					label="Facebook"
				/>
				<CaixaTexto
					className="mt-2 me-auto"
					handleChange={(e) => setformInstagram(e.target.value)}
					value={formInstagram}
					isInvalid={erros.instagram}
					label="Instagram"
				/>
				<Botao onClick={handleDataAtualizar} className="mt-2 me-auto">
					Atualizar
				</Botao>
			</div>
		</>
	);
}
