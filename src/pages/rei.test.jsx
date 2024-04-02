import { DraftEditor, SelectOptions } from "components/form";

export function Rei() {
	return (
		<>
			<DraftEditor />
			<SelectOptions
				options={[
					{ id: 1, option: "x1" },
					{ id: 2, option: "x2" },
				]}
			/>
		</>
	);
}
