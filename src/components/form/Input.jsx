import { findInputError, isFormInvalid } from "utils";
import { useFormContext } from "react-hook-form";
import { Icon } from "components/elementos";
import { InputSelector } from "./InputSelector";

export const Input = ({ name, id, label, validation, ...props }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputErrors = findInputError(errors, name);
	const isInvalid = isFormInvalid(inputErrors);

	return (
		<div>
			<div className="d-flex justify-content-between">
				<label htmlFor={id}>{label}</label>
				{isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
			</div>

			<InputSelector
				id={id}
				name={name}
				{...register(name, validation)}
				{...props}
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
