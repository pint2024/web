import { Texto } from "components/elementos";
import { isEmpty } from "utils/utils";
import { CheckBox } from "../checkBox/checkBox";

export const SelectOptions = ({ evento, options }) => {
	if (isEmpty(options)) return;
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
