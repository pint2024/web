import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const MeuTooltipPersonalizado = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
	({ theme }) => ({
		[`& .MuiTooltip-tooltip`]: {
			backgroundColor: "#ffffff", // Cor de fundo sólido
			color: "#000000", // Cor do texto
			borderRadius: "4px", // Bordas arredondadas
			boxShadow: theme.shadows[1], // Sombra para destacar o tooltip
		},
		[`& .MuiTooltip-arrow`]: {
			color: "#ffffff", // Cor da seta combinando com o fundo do tooltip
		},
	})
);

export function Tooltips({ trigger, children }) {
	return (
		<MeuTooltipPersonalizado title={trigger} arrow>
			<span>{children}</span>
		</MeuTooltipPersonalizado>
	);
}
