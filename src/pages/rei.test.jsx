import { Input } from "components/form/Input";
import { name_validation, email_validation, number_validation, password_validation, combobox_validation } from "utils/inputValidations";
import { Form } from "components/form";
import { ORDER_OPTIONS } from "data/constants";

export const Rei = () => {
	const handleData = (data) => {
		console.log("opa", data);
	};

	return (
		<Form handleData={handleData} mensagemSucesso={"Criado com sucesso"}>
			<Input
				input="text"
				name="name"
				label="name"
				type="text"
				id="name"
				placeholder="write your name ..."
				{...name_validation}
			/>
			<Input
				input="text"
				name="email"
				label="email"
				type="email"
				id="email"
				placeholder="write your email ..."
				{...email_validation}
			/>
			<Input
				input="text"
				name="number"
				label="number"
				type="number"
				id="number"
				placeholder="write your number ..."
				{...number_validation}
			/>
			<Input
				input="text"
				name="password"
				label="password"
				type="password"
				id="password"
				placeholder="write your password ..."
				{...password_validation}
			/>
			<Input
				input="combobox"
				name="combobox"
				label="combobox"
				type="combobox"
				id="combobox"
				placeholder="write your combobox ..."
				options={ORDER_OPTIONS}
				{...combobox_validation}
			/>
		</Form>
	);
};
