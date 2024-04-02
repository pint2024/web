import React, { useEffect, useState } from "react";
import { usePopup } from "hooks/usePopup";
import {
	Botao,
	CaixaTexto,
	CheckBox,
	DatePicker,
	TimePicker,
	MultiSelectBox,
	OTPVerification,
	ItemControl,
} from "components/form";
import { useConfirmation } from "hooks/useConfirmation";
import { Notificacao } from "components/notificacao/notificacao";
import { useLoading } from "hooks/useLoading";
import { DataRelativa } from "utils/date.utils";
import { SwitchToggle } from "components/form/select/switchToggle/switchToggle";
import { EMOJI_LIST } from "data/constants";
import { DraftEditor } from "components/form/draft-editor/draftEditor";


export function Teste() {
	const { puSet, puCreate, puOpen } = usePopup();
	const { conSet, conOpen, conCreate } = useConfirmation(false);
	const { startLoading, stopLoading } = useLoading();
	const [data, setdata] = useState();
	const [user, setuser] = useState();
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const handleMultiSelectChange = (selectedOptions) => {
		setSelectedOptions(selectedOptions);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
		setDarkMode(prefersDarkMode);
	}, []);

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
			<ItemControl
				options={[
					{ id: 0, text: "Philosopher’s Path", done: true },
					{ id: 1, text: "Visit the temple", done: false },
					{ id: 2, text: "Drink matcha", done: false },
				]}
			/>
			{conCreate()}
			{puCreate()}
			<Botao handleClick={handleOpenPopup}>Popup</Botao>
			<Botao handleClick={handleOpenConfirmation}>Confirmação</Botao>
			<Botao handleClick={handleConfirmationAccepted}>Notificações</Botao>
			<SwitchToggle />
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
				<MultiSelectBox
					options={[
						{ value: "1", label: "Opção 1" },
						{ value: "1", label: "Opção 2" },
						{ value: "1", label: "Opção 3" },
						{ value: "1", label: "Opção 5" },
						{ value: "1", label: "Opção 6" },
						{ value: "1", label: "Opção 7" },
						{ value: "1", label: "Opção 8" },
						{ value: "1", label: "Opção 9" },
						{ value: "1", label: "Opção 10" },
						{ value: "1", label: "Opção 11" },
						{ value: "1", label: "Opção 12" },
						{ value: "1", label: "Opção 13" },
					]}
					onChange={handleMultiSelectChange}
				/>
			</div>
		</div>
	);
}
