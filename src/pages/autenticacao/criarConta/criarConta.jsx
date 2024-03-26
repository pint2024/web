import React, { useState } from "react";
import { Botao, CaixaTexto, ImageBox } from "components/form/__init__";

export const CriarConta = () => {
    const [formNome, setFormNome] = useState("");
    const [formSobrenome, setFormSobrenome] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formSenha, setFormSenha] = useState("");
    const [formConfSenha, setFormConfSenha] = useState("");
    const [formDataNascimento, setFormDataNascimento] = useState("");
    const [formImagem, setFormImagem] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const fileValue = e.target.type === "file" ? e.target.files[0] : value;

        setFormImagem({ [name]: fileValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado:", formNome);
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-6">
                <h2 className="text-center mb-4">Criar Conta</h2>
                <form onSubmit={handleSubmit}>
                    <CaixaTexto
                        handleChange={(e) => setFormNome(e)}
                        value={formNome}
                        label="Nome"
                    />
                    <CaixaTexto
                        handleChange={(e) => setFormSobrenome(e)}
                        value={formSobrenome}
                        label="Sobrenome"
                    />
                    <CaixaTexto
                        handleChange={(e) => setFormEmail(e)}
                        value={formEmail}
                        label="Email"
                    />
                    <CaixaTexto
                        handleChange={(e) => setFormSenha(e)}
                        value={formSenha}
                        label="Senha"
                    />
					<CaixaTexto
                        handleChange={(e) => setFormConfSenha(e)}
                        value={formConfSenha}
                        label="Confirmar senha"
                    />
                    <Botao>Criar</Botao>
                </form>
            </div>
        </div>
    );
};
