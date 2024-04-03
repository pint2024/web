import { DraftEditor, Form, Input, SelectOptions } from "components/form";

export function Rei() {
	return (
		<>
			<DraftEditor />
			<SelectOptions
				options={[
					{ id: 1, option: "op1" },
					{ id: 2, option: "op2" },
				]}
			/>

			<h3>FORM & INPUT TESTE</h3>
			<Form>
				<Input key={1} type={"text"} label={"label1"} placeholder={"placeholder1"}/>
				<Input key={2} type={"text"} label={"label2"} placeholder={"placeholder2"}/>
				<Input key={3} type={"text"} label={"label3"} placeholder={"placeholder3"}/>
			</Form>
		</>
	);
}
