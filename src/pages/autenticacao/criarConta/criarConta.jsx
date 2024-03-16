import React, { useState } from "react";
import { Botao, CaixaTexto, DatePicker, ImageBox } from "components/form/__init__";

export const CriarConta = () => {
	const [formData, setFormData] = useState({
		nome: "",
		sobrenome: "",
		email: "",
		senha: "",
		data_nascimento: "",
		imagem: "",
		linkedin: "",
		instagram: "",
		facebook: "",
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		const fileValue = e.target.type === "file" ? files[0] : value;

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
						handleChange={(e) => setFormData({ ...formData, tag: e })}
						value={formData.tag}
						label="Tag"
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
					<ImageBox handleChange={handleChange} accept="image/*" title="Imagem de perfil" />
					<CaixaTexto
						handleChange={(e) => setFormData({ ...formData, linkedin: e })}
						value={formData.linkedin}
						label="Linkedin"
					/>
					<CaixaTexto
						handleChange={(e) => setFormData({ ...formData, instagram: e })}
						value={formData.instagram}
						label="Instagram"
					/>
					<CaixaTexto
						handleChange={(e) => setFormData({ ...formData, facebook: e })}
						value={formData.facebook}
						label="Facebook"
					/>
					<Botao>Criar</Botao>
				</form>
			</div>
		</div>
	);
};
