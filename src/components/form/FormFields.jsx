import { Input } from ".";

export const FormFields = ({ fields, values, handleChange, errors }) => {
	return (
		<>
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
							options={field?.options}
						/>
						{errors[field.name] && <p className="help is-danger">{errors[field.name]}</p>}
					</div>
				</div>
			))}
		</>
	);
};
