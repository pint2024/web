import { Texto } from "components/ui";
import { Utils } from "utils/utils";
import { CheckBox } from "../index";

export const SelecaoOpcoes = ({ evento, options }) => {
	if (Utils.isEmpty(options)) return;
	return (
		<>
			<Texto>{evento}</Texto>
			<ul>
				{options?.map((option) => (
					<>
						<CheckBox key={option.id} label={option.option} />
					</>
				))}
			</ul>
		</>
	);
};
