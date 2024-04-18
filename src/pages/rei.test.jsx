import { Input } from "components/form/Input";
import {
	name_validation,
	email_validation,
	number_validation,
	password_validation,
	combobox_validation,
} from "utils/inputValidations";
import { Form } from "components/form";
import { ORDER_OPTIONS } from "data/constants";

export const Rei = () => {
	return (
		<Form
			fields={[
				{ input: "text", label: "Label Email Address", type: "email", name: "email", ...email_validation },
				{ input: "text", label: "Label Password", type: "password", name: "password", ...password_validation },
				{
					input: "combobox",
					label: "Label ComboBox",
					name: "combobox",
					options: ORDER_OPTIONS,
					...combobox_validation,
				},
			]}
		/>
	);
};
