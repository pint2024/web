import "./iniciarSessao.css"

export function IniciarSessao() {
	return (
		<div className="outer-container">
			<div className="login-page-container">
				<div className="login-container">
					<h1>SOFTINSA</h1>
					<form>
						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" name="email" required />

						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" required />

						<button type="submit">Log in</button>
					</form>
					<br />
					<button className="register-button">Registar</button>
					<a href="/forgot-password" className="forgot-password-link">
						Forgot Password?
					</a>
				</div>
			</div>
		</div>
	);
}
