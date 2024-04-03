import { Input } from "components/form/1Input";
import {
	name_validation,
	email_validation,
	number_validation,
	password_validation,
} from "utils/inputValidations";
import { Form } from "components/form";
import { Notificacao } from "components/notificacao/1Notificacao";

export const Rei = () => {

	const handleData = (data) => {
		console.log("opa", data);
	}

	return (
		<Form handleData={handleData} mensagemSucesso={"Criado com sucesso"}>
			<Input name="name" label="name" type="text" id="name" placeholder="write your name ..." {...name_validation} />
			<Input
				name="email"
				label="email"
				type="email"
				id="email"
				placeholder="write your email ..."
				{...email_validation}
			/>
			<Input
				name="number"
				label="number"
				type="number"
				id="number"
				placeholder="write your number ..."
				{...number_validation}
			/>
			<Input
				name="password"
				label="password"
				type="password"
				id="password"
				placeholder="write your password ..."
				{...password_validation}
			/>
		</Form>
	);
};
