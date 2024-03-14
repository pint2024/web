import React, { useState } from "react";

export function OTPVerification() {
	const [otp, setOTP] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [isVerified, setIsVerified] = useState(false);

	const handleChange = (e) => {
		setOTP(e.target.value);
	};

	const handleVerify = () => {
		if (otp === verificationCode) {
			setIsVerified(true);
		} else {
			setIsVerified(false);
			alert("Código OTP inválido. Por favor, tente novamente.");
		}
	};

	const handleResend = () => {
		alert("Código OTP reenviado com sucesso.");
	};

	return (
		<div style={styles.container}>
			<div style={styles.box}>
				{!isVerified ? (
					<div>
						<h2>Verificação OTP</h2>
						<input type="text" placeholder="Digite o código OTP" value={otp} onChange={handleChange} />
						<button onClick={handleVerify}>Verificar</button>
						<button onClick={handleResend}>Reenviar OTP</button>
					</div>
				) : (
					<div>
						<h2>Verificação concluída com sucesso!</h2>
						<p>O OTP foi verificado com sucesso.</p>
					</div>
				)}
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	},
	box: {
		width: "300px",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		backgroundColor: "#f9f9f9",
	},
};
