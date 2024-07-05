import { Botao, CaixaTexto, Imagem } from "components/index";
import user2 from "assets/images/examples/e-2.jpg";

import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { useState } from "react";
import { Validador } from "utils/validator";
import { Sidebar } from "layouts/sidebar/Sidebar";

export function PaginaInicial() {
	const esquema = {
		name: { required: true },
		email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
		age: { type: "number", min: 18 },
	};

	const validador = new Validador(esquema);

	const variaveis = {
		name: "João",
		email: "joao@example.com",
		age: 25,
	};

	const erros = validador.validar(variaveis);

	if (Object.keys(erros).length > 0)
		console.log("Erros encontrados:", erros);
	else
		console.log("Variáveis válidas:", variaveis);

	return (
		<>
			Página Inicial
			<ImagemModal imagemSelecionada={user2} description={"oi"}>
				<Imagem src={user2} />
			</ImagemModal>
			<Sidebar/>
		</>
	);
}
