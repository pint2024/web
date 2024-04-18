import React, { useState } from "react";
import { useForm } from "./useForm";
import { Notificacao } from "components/notificacao/Notificacao";
import { Botao } from ".";
import { FormFields } from "./FormFields";

export const Form = ({ fields }) => {
	const [disableBtn, setdisableBtn] = useState(false);
	const { values, errors, handleChange, handleSubmit } = useForm(login, fields);

	function login() {
		console.log("Submited!");
		Notificacao("Sucesso filho");
	}

	function blockButton() {
		setdisableBtn(true);
	}

	return (
		<div className="section is-fullheight">
			<div className="container">
				<div className="column is-4 is-offset-4">
					<div className="box">
						<form onSubmit={handleSubmit} noValidate>
							<FormFields fields={fields} values={values} handleChange={handleChange} errors={errors} />
							<Botao type="submit" disabled={disableBtn}>
								Submeter
							</Botao>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
