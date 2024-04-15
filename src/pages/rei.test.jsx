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
				{ input: "text", label: "Email Address", type: "email", name: "email", required: true, ...email_validation },
				{ input: "text", label: "Password", type: "password", name: "password", required: true, ...password_validation },
			]}
		/>
	);
};
