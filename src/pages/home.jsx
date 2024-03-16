import React, { useEffect, useState } from "react";
import { usePopup } from "modules/hooks/usePopup";
import {
	Botao,
	CaixaTexto,
	ComboBox,
	FileBox,
	ImageBox,
	TextArea,
	CheckBox,
	DatePicker,
	TimePicker,
	MultiSelectBox,
	OTPVerification,
} from "components/form/__init__";
import { useConfirmation } from "modules/hooks/useConfirmation";
import { Notificacao } from "components/notificacao/notificacao";
import Texto from "components/texto/texto";
import Post from "components/cartao/post";
import { PLACEHOLDER_TEXT } from "data/constants";
import { useLoading } from "modules/hooks/useLoading";
import { DataRelativa } from "utils/date.utils";
import { SwitchToggle } from "components/form/switchToggle/switchToggle";

function Home() {
	const { puSet, puCreate, puOpen } = usePopup();
	const { conSet, conOpen, conCreate } = useConfirmation(false);
	const { startLoading, stopLoading } = useLoading();
	const [data, setdata] = useState();
	const [user, setuser] = useState();
	const [selectedOptions, setSelectedOptions] = useState([]);
	const handleMultiSelectChange = (selectedOptions) => {
		setSelectedOptions(selectedOptions);
	};

	useEffect(() => {
		async function fetchUtilizador() {
			const x = DataRelativa("02/05/2023 18:51:10");
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

			<SwitchToggle />

			<Botao handleClick={handleOpenConfirmation}>Adicionar</Botao>
			<Botao handleClick={handleConfirmationAccepted}>Notificações</Botao>
			<br />
			<br />
			<br />
			<br />
			<div className="d-flex">
				<Botao variant="primario">Primário</Botao>
				<Botao variant="secundario">Secundário</Botao>
				<Botao variant="perigo">Perigo</Botao>
				<Botao variant="sucesso">Sucesso</Botao>
			</div>
			<br />
			<br />
			<br />
			<br />
			<CheckBox label={"CheckBox"} />

			<DatePicker />
			<TimePicker />
			<OTPVerification />

			<div>{user}</div>

			<div>
				<h1>Selecione suas opções:</h1>
				<MultiSelectBox
					options={[
						"Opção 1",
						"Opção 2",
						"Opção 3",
						"Opção 5",
						"Opção 6",
						"Opção 7",
						"Opção 8",
						"Opção 9",
						"Opção 10",
						"Opção 11",
						"Opção 12",
						"Opção 13",
					]}
					onChange={handleMultiSelectChange}
				/>
			</div>
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
