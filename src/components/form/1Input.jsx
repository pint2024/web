/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from "classnames";
import { findInputError, isFormInvalid } from "utils";
import { useFormContext } from "react-hook-form";
import { Icon } from "components/elementos";

export const Input = ({ name, label, type, id, placeholder, validation }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputErrors = findInputError(errors, name);
	const isInvalid = isFormInvalid(inputErrors);

	return (
		<div>
			<div className="d-flex justify-content-between">
				<label htmlFor={id}>
					{label}
				</label>
				{isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
			</div>

			<input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(name, validation)}
			/>
		</div>
	);
};

const InputError = ({ message }) => {
	return (
		<>
			<Icon iconName="X" />
			{message}
		</>
	);
};
