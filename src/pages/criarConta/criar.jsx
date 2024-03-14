import React, { useState } from 'react';
import { DatePicker } from "components/form/__init__";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        data_nascimento: '',
        imagem: '',
        linkedin: '',
        instagram: '',
        facebook: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // Se o campo é do tipo file, pegue o primeiro arquivo
        const fileValue = e.target.type === 'file' ? files[0] : value;

        setFormData({
            ...formData,
            [name]: fileValue
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou realizar outras operações
        console.log('Formulário enviado:', formData);
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="col-lg-6">
                <h2 className="text-center mb-4">Criar Conta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Endereço de E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="data_nascimento">Data de Nascimento:</label>
                        <DatePicker
                            id="data_nascimento"
                            name="data_nascimento"
                            selected={formData.data_nascimento}
                            onChange={date => setFormData({ ...formData, data_nascimento: date })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Escolha uma Imagem:</label>
                        <input
                            type="file"
                            id="imagem"
                            name="imagem"
                            accept="image/*"
                            onChange={handleChange}
                            className="form-control-file"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">LinkedIn:</label>
                        <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="instagram">Instagram:</label>
                        <input
                            type="url"
                            id="instagram"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebook">Facebook:</label>
                        <input
                            type="url"
                            id="facebook"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Criar Conta</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
