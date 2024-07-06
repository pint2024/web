import "./seletor.css";

export function Seletor({ label, handleChange, value }) {
	return (
		<div className="toggle-switch-container">
			<label className="toggle-switch-label-text">{label}</label>
			<div className="toggle-switch">
				<input
					type="checkbox"
					id="toggle"
					className="toggle-switch-checkbox"
					checked={value}
					onChange={(e) => handleChange(e.target.checked)}
				/>
				<label className="toggle-switch-label" htmlFor="toggle">
					<span className="toggle-switch-inner" />
					<span className="toggle-switch-switch" />
				</label>
			</div>
		</div>
	);
}
