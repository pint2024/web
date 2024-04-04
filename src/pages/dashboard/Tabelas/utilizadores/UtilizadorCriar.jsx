import { createData, useData } from "src/api/dataComponents";
import { comboBoxOptions } from "src/utils/functionUtils";
import TabelaCriar from "src/components/Tabelas/tabelaCriar";
import { useState } from "react";
import { checkCamposInvalidos } from "src/utils/dataControl";
import LoadingPage from "src/components/LoadingPage/loadingPage";
import { checkEmail, checkTag, statusResponse } from "src/utils/statusUtils";
import { useCarregando } from "src/hooks/useCarregando";

export default function TabelaUtilizadorCriar() {
	const [dataPerfil, loadingPerfil] = useData("/utilizador/perfil/list");
	const { startLoading, stopLoading } = useCarregando();

	const [tag, settag] = useState("");
	const [nome, setnome] = useState("");
	const [apelido, setapelido] = useState("");
	const [email, setemail] = useState("");
	const [perfil, setperfil] = useState("");
	const [descricao, setdescricao] = useState("");
	const [password, setpassword] = useState("");

	if (loadingPerfil) return <LoadingPage />;

	async function handleSubmit() {
		if (!checkTag(tag)) return false;
		if (!checkEmail(email)) return false;
		if (checkCamposInvalidos(nome, apelido, perfil, descricao)) return false;
		startLoading();
		const data = {
			utilizador_tag: tag,
			utilizador_nome: nome,
			utilizador_apelido: apelido,
			utilizador_email: email,
			utilizador_perfil: perfil,
			utilizador_descricao: descricao,
			utilizador_password: password,
			utilizador_administradorcriou: true,
		};
		await statusResponse({ asyncFunction: () => createData("/utilizador/create", data), successMessage: "Utilizador criado com sucesso!"});
		stopLoading();
	}

	const form = [
		{
			label: "Tag",
			getter: tag,
			setter: settag,
			comp: "text",
		},
		{
			label: "Nome",
			getter: nome,
			setter: setnome,
			comp: "text",
		},
		{
			label: "Apelido",
			getter: apelido,
			setter: setapelido,
			comp: "text",
		},
		{
			label: "Email",
			getter: email,
			setter: setemail,
			comp: "text",
		},
		{
			label: "Password",
			getter: password,
			setter: setpassword,
			comp: "password",
		},
		{
			label: "Perfil",
			getter: perfil,
			setter: setperfil,
			comp: "list",
			options: comboBoxOptions(dataPerfil, "utilizadorperfil_id", "utilizadorperfil_nome"),
		},
		{
			label: "Descrição",
			getter: descricao,
			setter: setdescricao,
			comp: "area",
		},
	];

	return (
		<div>
			<TabelaCriar form={form} handleSubmit={handleSubmit} titulo={"Utilizador"} />
		</div>
	);
}
