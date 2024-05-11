import { Divider, Icon } from "components/elementos";
import { SwitchToggle } from "components/form";

export const FormularioOpcoes = () => {
	return (
		<>
			<Divider />
			<div className="d-flex align-items-center gap-2">
				<div className="d-flex align-items-center">
					Remover <Icon iconName="TrashFill" />
				</div>{" "}
				|
				<div className="d-flex align-items-center">
					Obrigatório <SwitchToggle />
				</div>
			</div>
		</>
	);
};
