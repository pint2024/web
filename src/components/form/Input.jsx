import { InputSelector } from "./InputSelector";

export const Input = ({ id, label, input, ...props }) => {
	return (
		<div>
			<div className="d-flex justify-content-between">
				<label htmlFor={id}>{label}</label>
			</div>

			<InputSelector id={id} input={input} {...props} />
		</div>
	);
};
