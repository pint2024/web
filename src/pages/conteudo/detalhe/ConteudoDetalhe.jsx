import { Texto, PequenoPerfil, Imagem, Botao, ControlosInteracao } from "components/index";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import { useEffect, useState } from "react";
import User from "assets/images/user-default.png";
import Placeholder from "assets/images/placeholder.png";
import Ex1 from "assets/images/examples/e-1.jpg";
import Ex2 from "assets/images/examples/e-2.jpg";
import Ex3 from "assets/images/examples/e-3.jpg";
import Ex4 from "assets/images/examples/e-4.jpg";
import Ex5 from "assets/images/examples/e-5.jpg";
import { Album } from "./Album";
import { ComentarioSeccao } from "./ComentarioSeccao";

export function ConteudoDetalhe() {
	const [data, setdata] = useState(0);

	useEffect(() => {
		setdata({
			id: "1",
			titulo: PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE,
			descricao: PLACEHOLDER_TEXT + PLACEHOLDER_TEXT,
			topico: "Desporto",
			utilizador: "Lucas Sebastião",
			date: "25/04/2024",
			gostos: 10,
			comentarios: 20,
			imagem: Ex5,
			utilizador_imagem: User,
		});
	}, []);

	const images = [Ex1, Ex2, Ex3, Ex4];

	return (
		<article className="AtividadeDetalhe" id={data.id}>
			<section className="conteudo-detalhe-conteudo">
				<div className="conteudo-detalhe-info">
					<PequenoPerfil imagem={data.utilizador_imagem} nome={data.utilizador} data={data.date} />
				</div>
				<div className="conteudo-detalhe-titulo">
					<Texto size={3} className="">
						{data.titulo}
					</Texto>
				</div>
				<div className="conteudo-detalhe-descricao">
					<Texto className="">{data.descricao}</Texto>
				</div>
				<div className="conteudo-detalhe-imagem">
					<Imagem src={data.imagem} style={{ width: "100px", height: "100px" }} />
				</div>
				<div className="conteudo-detalhe-botoes">
					<ControlosInteracao hideComentario={true} />
					<div className="d-flex gap-2 mt-2">
						<Botao>Formulário</Botao>
						<Botao>Editar</Botao>
						<Botao>Apagar</Botao>
					</div>
				</div>
			</section>
			<section className="conteudo-detalhe-interacoes">
				<Album imagens={images} />
				<ComentarioSeccao />
			</section>
		</article>
	);
}