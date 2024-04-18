import { InputSelector } from "./InputSelector";

export const Input = ({ id, input, ...props }) => {
	return (
		<div>
			<InputSelector id={id} input={input} {...props} />
		</div>
	);
};
