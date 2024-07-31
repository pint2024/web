import { ApiRequest } from "api";
import { Botao, CaixaTexto, ComboBox } from "components";
import { COMBOBOX_DEFAULT_VALUE } from "data/constants";
import { BUTTON_VARIANTS } from "data/data";
import { useCarregando } from "hooks/useCarregando";
import { useInput } from "hooks/useInput";
import { useEffect, useState } from "react";
import { Utils } from "utils/utils";

export function Filtros({ data, setFiltered }) {
	const searchGeral = useInput();
	const searchEstado = useInput(0);
	const searchTipo = useInput(0);
	const [dataEstado, setdataEstado] = useState(null);
	const [dataTipo, setdataTipo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	const filterData = () => {
		let filteredData = data;
		if (searchGeral.value) {
			const searchValue = searchGeral.value.toLowerCase();
			filteredData = filteredData.filter(
				(user) =>
					user.conteudo_utilizador.nome.toLowerCase().includes(searchValue) ||
					user.conteudo_utilizador.sobrenome.toLowerCase().includes(searchValue) ||
					user.conteudo_utilizador.tag.toLowerCase().includes(searchValue) ||
					user.revisao_conteudo[0].revisao_estado.estado.toLowerCase().includes(searchValue) ||
					user.conteudo_tipo.tipo.toLowerCase().includes(searchValue) ||
					user.titulo.toLowerCase().includes(searchValue)
			);
		}

		if (Utils.convertoStrToInt(searchEstado.value) !== COMBOBOX_DEFAULT_VALUE) {
			const searchValue = Utils.convertoStrToInt(searchEstado.value);
			filteredData = filteredData.filter((user) => user.revisao_conteudo[0].revisao_estado.id === searchValue);
		}

		if (Utils.convertoStrToInt(searchTipo.value) !== COMBOBOX_DEFAULT_VALUE) {
			const searchValue = Utils.convertoStrToInt(searchTipo.value);
			filteredData = filteredData.filter((user) => user.conteudo_tipo.id === searchValue);
		}

		setFiltered(filteredData);
	};

	useEffect(() => {
		if (data) {
			filterData();
		}
	}, [searchGeral.value, searchTipo.value, searchEstado.value, data]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		startLoading();
		await fetchCentro();
		await fetchPerfil();
		stopLoading();
	};

	const fetchCentro = async () => {
		const response = await ApiRequest.listar("estado/simples");
		setdataEstado(response);
	};

	const fetchPerfil = async () => {
		const response = await ApiRequest.listar("tipo/simples");
		setdataTipo(response);
	};

	const transformarDadosEstado = () => {
		return dataEstado?.map((item) => ({
			value: item.id,
			label: item.estado,
		}));
	};

	const transformarDadosTipo = () => {
		return dataTipo?.map((item) => ({
			value: item.id,
			label: item.tipo,
		}));
	};

	const handleCleanFilters = () => {
		searchEstado.setValue(COMBOBOX_DEFAULT_VALUE);
		searchTipo.setValue(COMBOBOX_DEFAULT_VALUE);
		searchGeral.setValue("");
	};

	if (!dataEstado || !dataTipo) return;

	return (
		<>
			<CaixaTexto
				className="mt-2 me-auto"
				handleChange={(e) => searchGeral.onChange(e)}
				value={searchGeral.value}
				placeholder="Pesquisar utilizador..."
			/>
			<div className="d-flex align-items-center gap-3">
				<ComboBox
					className="mt-2"
					options={transformarDadosTipo()}
					placeholder="Escolha o tipo..."
					handleChange={(e) => searchTipo.setValue(e)}
					value={searchTipo.value}
				/>
				<ComboBox
					className="mt-2"
					options={transformarDadosEstado()}
					placeholder="Escolha o estado..."
					handleChange={(e) => searchEstado.setValue(e)}
					value={searchEstado.value}
				/>
				<Botao variant={BUTTON_VARIANTS.SECUNDARIO} onClick={() => handleCleanFilters()}>
					Limpar
				</Botao>
			</div>
		</>
	);
}
