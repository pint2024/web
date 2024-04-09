import { Input } from "components/form/Input";
import {
	name_validation,
	email_validation,
	number_validation,
	password_validation,
	combobox_validation,
} from "utils/inputValidations";
import { Form } from "components/form";
import { FormInput } from "components/form/FormInput";

export const Rei = () => {
	return (
		<Form>
			<FormInput label="Email Address" name="email" type="email" />
			<FormInput label="Password" name="password" type="password" />
		</Form>
	);
};
