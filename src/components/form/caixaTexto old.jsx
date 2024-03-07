export function CaixaTexto({
	title = "",
	prefix = false,
	inputType = "text",
	handleChange,
	handleKeyDown,
	value = "",
	disabled = false,
	placeholder = "",
}) {
	const handleInputChange = (e) => {
		setValue(e.target.value);
		if (typeof handleChange === 'function') {
			handleChange(e);
		}
	};
	
	return (
		<>
			{title && <label htmlFor="inputNome">{title}</label>}
			<div className="input-group">
				{prefix && (
					<span className="input-group-text" id="basic-addon">
						{prefix}
					</span>
				)}
				<input
					type={inputType}
					id="inputNome"
					className="form-control"
					value={value}
					disabled={disabled}
					placeholder={placeholder}
					onChange={(e) => handleChange(e)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							handleKeyDown();
						}
					}}
				/>
			</div>
		</>
	);
}
