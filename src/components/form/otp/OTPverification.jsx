  import React, { useState, useEffect } from "react";
  import otpimg from "assets/images/otp.png";

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

    const handleVerify = () => { ///verifica se o codigo criado em cima é igual ao que foi posto
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
            <div>
              <img src={otpimg} alt="Imagem" style={styles.image} />
              <h2 style={styles.heading}>Verificação OTP</h2>
              <p style={styles.subheading}>
                One Time Password (OTP) foi enviada via email para:{" "}
                {emailSentTo ? <span style={styles.email}>{emailSentTo}</span> : ""}
              </p>
              <div style={styles.inputContainer}>
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
                <button onClick={handleVerify} style={styles.button}>
                  Verificar
                </button>
                <button onClick={handleResendemail} style={styles.button}>
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
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  image: {
    width: "100px",
    marginBottom: "10px",
  },
  email: {
    fontWeight: "bold",
  },
};
