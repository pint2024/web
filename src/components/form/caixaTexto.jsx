export function CaixaTexto({
	label,
	placeholder,
	addon = false,
	inputType = "text",
	marginTop = 0,
	handleChange = null,
	value = null,
	maxChar = 5000,
	disable = false,
	defaultValue = null
}) {
	return (
		<div className={`TextBox mt-${marginTop}`}>
			{label && <label htmlFor="inputNome">{label}</label>}
			<div className="input-group">
				{addon && (
					<span className="input-group-text" id="basic-addon">
						{addon}
					</span>
				)}
				<input
					type={inputType}
					className="form-control"
					id="inputNome"
					placeholder={placeholder}
					onChange={handleChange}
					value={value}
					title={label}
					disabled={disable}
				/>
			</div>
		</div>
	);
}
