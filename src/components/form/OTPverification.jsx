import React, { useState } from "react";
<<<<<<< HEAD
import otpimg from "assets/images/otp.png";

export function OTPVerification() {
  const [otp, setOTP] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [emailSentTo, setEmailSentTo] = useState(""); // Estado para armazenar o e-mail
=======

export function OTPVerification() {
	const [otp, setOTP] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [isVerified, setIsVerified] = useState(false);
>>>>>>> 9fbb35b85da76d26daa6c97f297b54988b036998

	const handleChange = (e) => {
		setOTP(e.target.value);
	};

<<<<<<< HEAD
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

  const handleResendemail = () => {
    const email = "usuario@example.com";
    setEmailSentTo(email); 
    alert(`Código OTP enviado para: ${email}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        {!isVerified ? (
          <div>
            <img src={otpimg} alt="Imagem" style={styles.image} />
            <h2 style={styles.heading}>Verificação OTP</h2>
            <p style={styles.subheading}>
          One Time Password (OTP) foi enviada via email para:{" "}
          {emailSentTo ? <span style={styles.email}>{emailSentTo}</span> : ""}
        </p>
            <input
              type="text"
              placeholder="Digite o código OTP"
              value={otp}
              onChange={handleChange}
              style={styles.input}
            />
            <div style={styles.buttonContainer}>
              <button onClick={handleVerify} style={styles.button1}>
                Verificar
              </button>
              <button onClick={handleResend} style={styles.button2}>
                Reenviar OTP
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 style={styles.heading}>Verificação concluída com sucesso!</h2>
            <p style={styles.text}>O OTP foi verificado com sucesso.</p>
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
    height: "60vh",
  },
  box: {
    width: "500px",
    height: "400px",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  text: {
    marginTop: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button1: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "60px", // Ajuste a margem superior conforme necessário
    marginLeft: "50px", // Ajuste a margem esquerda conforme necessário
  },
  button2: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "60px", // Ajuste a margem superior conforme necessário
    marginRight: "50px", // Ajuste a margem direita conforme necessário
  },
  image: {
    width: "100px",
    marginBottom: "10px", // Adiciona espaço entre a imagem e o título
  },
=======
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
>>>>>>> 9fbb35b85da76d26daa6c97f297b54988b036998
};
