import React from "react";
import { useForm } from "./useForm";
import validate from "./LoginFormValidationRules";
import { Notificacao } from "components/notificacao/Notificacao";
import { Botao, Input } from ".";

export const Form = ({ fields }) => {
	const { values, errors, handleChange, handleSubmit } = useForm(login, fields);

	function login() {
		console.log("Submited!");
		Notificacao("Sucesso filho");
	}

	console.log("opa", fields);

	return (
		<div className="section is-fullheight">
			<div className="container">
				<div className="column is-4 is-offset-4">
					<div className="box">
						<form onSubmit={handleSubmit} noValidate>
							{fields.map((field, index) => (
								<div className="field" key={index}>
									<label className="label">{field.label}</label>
									<div className="control">
										<Input
											autoComplete="off"
											input={field.input}
											type={field.type}
											name={field.name}
											onChange={handleChange}
											value={values[field.name] || ""}
											required={field?.validation?.required?.value || null}
											minLength={field?.validation?.minLength?.value || null}
											maxLength={field?.validation?.maxLength?.value || null}
											pattern={field?.validation?.pattern?.value || null}
										/>
										{errors[field.name] && <p className="help is-danger">{errors[field.name]}</p>}
									</div>
								</div>
							))}
							<Botao type="submit">Submeter</Botao>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
