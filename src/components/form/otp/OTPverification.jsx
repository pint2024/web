import React, { useState, useEffect } from "react";
import otpimg from "assets/images/otp.png";
import { Botao } from "../index";
import { Texto } from "components/elementos";

export function OTPVerification() {
	const [otp, setOTP] = useState(["", "", "", "", ""]);
	const [verificationCode, setVerificationCode] = useState("");
	const [isVerified, setIsVerified] = useState(false);
	const [emailSentTo, setEmailSentTo] = useState("");

	/*
    useEffect(() => {
      handleResendemail(); // pk que isto manda duas vezes?!?!
    }, []);
    */

	useEffect(() => {
		const generateOTP = () => {
			const length = 6;
			const charset = "0123456789";
			let otp = "";
			for (let i = 0; i < length; i++) {
				const randomIndex = Math.floor(Math.random() * charset.length);
				otp += charset[randomIndex];
			}
			return otp;
		};

		const generatedOTP = generateOTP(); //o codigo otp é guardado aqui
		//setOTP(generatedOTP.split("")); //Caso seja necessario ver o codigo otp que foi criado usar esta linha
		console.log("Código OTP gerado:", generatedOTP);
	}, []);

	const handleChange = (e, index) => {
		const newOTP = [...otp];
		newOTP[index] = e.target.value;
		setOTP(newOTP);
	};

	const handleVerify = () => {
		///verifica se o codigo criado em cima é igual ao que foi posto
		const enteredOTP = otp.join("");
		if (enteredOTP === verificationCode) {
			setIsVerified(true);
		} else {
			setIsVerified(false);
			alert("Código OTP inválido. Por favor, tente novamente.");
		}
	};

	const handleResend = () => {
		alert("Código OTP reenviado com sucesso.");
	};

	const handleResendemail = () => {
		const email = "usuario@example.com";
		setEmailSentTo(email);
		alert(`Código OTP enviado para: ${email}`);
	};

	return (
		<div style={styles.container}>
			<div style={styles.box}>
				{!isVerified ? (
					<div style={styles.insideBox}>
						<img src={otpimg} alt="Imagem" style={styles.image} />
						<Texto size={4}>Verificação OTP</Texto>
						<Texto>
							One Time Password (OTP) foi enviada via email para:{" "}
							{emailSentTo ? <span style={styles.email}>{emailSentTo}</span> : ""}
						</Texto>

						<div style={styles.inputContainer} className="mt-3">
							{otp.map((value, index) => (
								<input
									key={index}
									type="text"
									maxLength="1"
									value={value}
									onChange={(e) => handleChange(e, index)}
									style={styles.input}
								/>
							))}
						</div>
						<div style={styles.buttonContainer}>
							<Botao handleClick={handleVerify}>Verificar</Botao>
							<Botao handleClick={handleResendemail}>Reenviar</Botao>
						</div>
					</div>
				) : (
					<div>
						<Texto size={4}>Verificação concluída com sucesso!</Texto>
						<Texto>O OTP foi verificado com sucesso.</Texto>
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
	},
	box: {
		justifyContent: "center",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		textAlign: "center",
	},
	heading: {
		marginBottom: "20px",
	},
	subheading: {
		marginBottom: "20px",
	},
	text: {
		marginTop: "20px",
	},
	inputContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "20px",
	},
	input: {
		width: "40px",
		height: "40px",
		fontSize: "20px",
		textAlign: "center",
		marginRight: "10px",
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	image: {
		width: "100px",
		marginBottom: "10px",
	},
	email: {
		fontWeight: "bold",
	},
};
