import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Botao } from ".";
import { createContext, useContext } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const Form = ({ children }) => {
	const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

	function login() {
		console.log("No errors, submit callback called!");
	}

	return (
		<div className="section is-fullheight">
			<div className="container">
				<div className="column is-4 is-offset-4">
					<div className="box">
						<form onSubmit={handleSubmit} noValidate>
							<div className="form-fields">{children}</div>
							<Botao onClick={handleSubmit}>Login</Botao>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
