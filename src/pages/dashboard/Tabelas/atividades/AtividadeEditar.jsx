import { updateData, useData } from "src/api/dataComponents";
import { comboBoxOptions } from "src/utils/functionUtils";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TabelaEditar from "src/components/Tabelas/tabelaEditar";
import { useEffect } from "react";

export default function TabelaUtilizadorCriar() {
	const { id } = useParams();
	const [dataPerfil, loadingPerfil] = useData('/utilizador/perfil/list');
	const [dataUtilizador, loadignUtilizador] = useData(`/utilizador/get/${id}`)

	const [tag, settag] = useState('');
	const [nome, setnome] = useState('');
	const [apelido, setapelido] = useState('');
	const [email, setemail] = useState('');
	const [perfil, setperfil] = useState('');
	const [descricao, setdescricao] = useState('');
	const [password, setpassword] = useState('');

	useEffect(() => {
		if (!loadingPerfil && dataPerfil && !loadignUtilizador) {
			settag(dataUtilizador.utilizador_tag);
			setnome(dataUtilizador.utilizador_nome);
			setapelido(dataUtilizador.utilizador_apelido);
			setemail(dataUtilizador.utilizador_email);
			setperfil(dataUtilizador.utilizador_perfil);
			setdescricao(dataUtilizador.utilizador_descricao);
			setpassword(dataUtilizador.utilizador_password);
		}
	}, [dataUtilizador, loadignUtilizador, dataPerfil, loadingPerfil]);

	async function handleUpdate() {
		const data = {
			utilizador_nome: nome,
			utilizador_apelido: apelido,
			utilizador_perfil: perfil,
			utilizador_descricao: descricao,
			utilizador_password: password,
		}
		return await updateData(`/utilizador/update/${id}`, data);
	}

	const form = [
		{
			label: 'Nome',
			getter: nome,
			setter: setnome,
			comp: 'text',
		},
		{
			label: 'Apelido',
			getter: apelido,
			setter: setapelido,
			comp: 'text',
		},
		{
			label: 'Password',
			getter: password,
			setter: setpassword,
			comp: 'password',
		},
		{
			label: 'Perfil',
			getter: perfil,
			setter: setperfil,
			comp: 'list',
			options: comboBoxOptions(dataPerfil, 'utilizadorperfil_id', 'utilizadorperfil_nome'),
		},
		{
			label: 'Descrição',
			getter: descricao,
			setter: setdescricao,
			comp: 'area',
		},
	];

	return (
		<div>
			<TabelaEditar
				form={form}
				handleUpdate={handleUpdate}
				titulo={'Utilizador'}
			/>
		</div>
	);
}