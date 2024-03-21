import React, { useState } from "react";
import { Botao, CaixaTexto, ImageBox } from "components/form/__init__";

export const CriarConta = () => {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
		confirmarsenha: "",
        data_nascimento: "",
        imagem: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const fileValue = e.target.type === "file" ? e.target.files[0] : value;

        setFormData({
            ...formData,
            [name]: fileValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado:", formData);
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-6">
                <h2 className="text-center mb-4">Criar Conta</h2>
                <form onSubmit={handleSubmit}>
                    <CaixaTexto
                        handleChange={(e) => setFormData({ ...formData, nome: e })}
                        value={formData.nome}
                        label="Nome"
                    />
                    <CaixaTexto
                        handleChange={(e) => setFormData({ ...formData, sobrenome: e })}
                        value={formData.sobrenome}
                        label="Sobrenome"
                    />
                    <CaixaTexto
                        handleChange={(e) => setFormData({ ...formData, email: e })}
                        value={formData.email}
                        label="Email"
                    />
                    <CaixaTexto
                        handleChange={(e) => setFormData({ ...formData, senha: e })}
                        value={formData.senha}
                        label="Senha"
                    />
					<CaixaTexto
                        handleChange={(e) => setFormData({ ...formData, senha: e })}
                        value={formData.confirmarsenha}
                        label="Confirmar senha"
                    />
                    {}
                    <ImageBox
                        handleChange={handleChange}
                        value={formData.imagem} 
                        title="Imagem de perfil"
                    />  
                    <Botao>Criar</Botao>
                </form>
            </div>
        </div>
    );
};
