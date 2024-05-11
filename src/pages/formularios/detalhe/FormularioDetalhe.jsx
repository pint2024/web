import { Bloco } from "components/elementos/blocos/Bloco";
import { Botao, ComboBox, SwitchToggle } from "components/form";
import { RespostasPolling } from "./RespostasPolling";
import { RespostasQuestion } from "./RespostasQuestion";
import { useConfirmation } from "hooks/useConfirmation";
import { Notificacao } from "components/notificacao/Notificacao";
import { Texto } from "components/elementos";

export const FormularioDetalhe = () => {
	const { conSet, conOpen, conCreate } = useConfirmation(false);

	const handleOpenConfirmation = () => {
		conSet({
			title: "Título da Confirmação",
			body: "Corpo da Confirmação",
			onSuccess: () => handleConfirmationAccepted,
		});
		conOpen();
	};

	const handleConfirmationAccepted = () => {
		Notificacao("Respostas foram fechadas!", "success");
	};

	const handleExportarDados = () => {
		Notificacao("Dados foram exportados!", "info");
	}

	return (
		<>
			{conCreate()}
			<Bloco>
				<div><Texto size={4}>9 respostas</Texto></div>
				<div className="d-flex gap-3">
					<ComboBox placeholder={"Filtrar por utilizador"} />
					<Botao variant="secundario" onClick={handleExportarDados}>
						Exportar Dados
					</Botao>
					<Botao variant="perigo" onClick={handleOpenConfirmation}>
						Terminar
					</Botao>
				</div>
			</Bloco>
			<div className="mt-3">
				<RespostasPolling />
			</div>
			<div className="mt-3">
				<RespostasQuestion />
			</div>
		</>
	);
};
