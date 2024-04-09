import { useFormContext } from "react-hook-form";

export const FormInput = ({ label, name, type }) => {
	const { values, errors, handleChange } = useFormContext();

	return (
		<div className="field">
			<label className="label">{label}</label>
			<div className="control">
				<input
					autoComplete="off"
					className={`input ${errors[name] && "is-danger"}`}
					type={type}
					name={name}
					onChange={handleChange}
					value={values[name] || ""}
					required
				/>
				{errors[name] && <p className="help is-danger">{errors[name]}</p>}
			</div>
		</div>
	);
};
