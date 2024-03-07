import React, { useEffect, useState } from "react";
import { usePopup } from "modules/hooks/usePopup";
import { Botao, CaixaTexto, ComboBox, FileBox, ImageBox, TextArea, CheckBox, DatePicker, TimePicker } from "components/form/__init__";
import { useConfirmation } from "modules/hooks/useConfirmation";
import { Notificacao } from "components/notificacao/notificacao";
import Texto from "components/texto/texto";
import Post from "components/cartao/post";
import { PLACEHOLDER_TEXT } from "data/constants";
import Loading from "components/loading/loading";
import { useLoading } from "modules/hooks/useLoading";
import { myAxios } from "api/axios";
import { atualizarRequest, criarRequest, listarRequest, obterRequest } from "api/__init__";
import { GraficoBarras } from "components/graficos/__init__";
import { Tempo } from "utils/dataUtils";
import { OTPVerification } from "components/form/__init__";

function Home() {
	const { puSet, puCreate, puOpen } = usePopup();
	const { conSet, conOpen, conCreate } = useConfirmation(false);
	const { startLoading, stopLoading } = useLoading();
	const [data, setdata] = useState();
	const [user, setuser] = useState();

	/*useEffect(() => {
		async function atualizarData() {
			const response = await atualizarRequest("atividade", 16, {
				"titulo": "titulo teste123 atualizado",
				"descricao": "descricao teste123 atualizado",
			});
			console.log(response);
			setdata(response);
		}

		atualizarData();
	}, [setdata]);*/

	/*useEffect(() => {
		async function fetchUtilizador() {
			startLoading();
			const response = await listarRequest("utilizador");
			stopLoading();
			console.log(response);
			setuser(response);
		}

		fetchUtilizador();
	}, [setuser]);*/

	useEffect(() => {
		async function fetchUtilizador() {
			const x = Tempo("02/05/2023 18:51:10");
			setuser(x);
		}

		fetchUtilizador();
	}, [setuser]);

	const handleOpenPopup = () => {
		puSet({
			headerInfo: "Subtítulo do Popup",
			headerTitle: "Título do Popup",
			headerIcons: null,
			body: (
				<section>
					<CaixaTexto
						title={"ola"}
						prefix={"asd2"}
						inputType={"number"}
						marginTop={"asd4"}
						value={"asd6"}
						disabled={false}
					/>
				</section>
			),
			footer: <Botao handleClick={handleOpenConfirmation}>Adicionar</Botao>,
		});
		puOpen();
	};

	const handleOpenConfirmation = () => {
		conSet({
			title: "Título da Confirmação",
			body: "Corpo da Confirmação",
			onSuccess: () => handleConfirmationAccepted,
		});
		conOpen();
	};

	const handleConfirmationAccepted = () => {
		Notificacao("opa", "success");
		Notificacao("opa", "info");
		Notificacao("opa", "warn");
		Notificacao("opa", "error");
		startLoading();
		setTimeout(aux, 1000);
	};

	const aux = () => {
		stopLoading();
	};

	/*const dadosFicticios = {
		labels: ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5"],
		datasets: [
			{
				label: "Dados Fictícios",
				data: [30, 45, 20, 75, 60],
				backgroundColor: "rgba(75,192,192,0.6)",
				borderColor: "rgba(75,192,192,1)",
				borderWidth: 1,
			},
		],
	};*/

	return (
		<div>
			<Texto size={4}>Ola reis</Texto>
			<Botao handleClick={handleOpenPopup}>Popup</Botao>
			{puCreate()}
			{conCreate()}

			{/*<GraficoBarras chartData={dadosFicticios} Nome="Grafico de Exemplo" />*/}

			<Botao handleClick={handleOpenConfirmation}>Adicionar</Botao>
			<Botao handleClick={handleConfirmationAccepted}>Notificações</Botao>

			<CheckBox />

			<DatePicker />
			<TimePicker />
			<OTPVerification />

			<div>{user}</div>

			<Post
				id={1}
				titulo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
				descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
				date={"à 1h"}
				utilizador={"Joaumzin Gaimeplais"}
			/>
		</div>
	);
}

export default Home;
