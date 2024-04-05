import { FormProvider, useForm } from "react-hook-form";
import { Botao } from "components/form";
import { Notificacao } from "components/notificacao/Notificacao";

export const Form = ({ route, handleData, mensagemSucesso, children }) => {
	const methods = useForm();

	const onSubmit = methods.handleSubmit((data) => {
		methods.reset();
		console.log(data);
		if (typeof handleSubmit === "function") handleData(data);
		Notificacao(mensagemSucesso);
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
				<div>{children}</div>
				<div>
					<Botao handleClick={onSubmit}>Submeter</Botao>
				</div>
			</form>
		</FormProvider>
	);
};
