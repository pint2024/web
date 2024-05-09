import { Texto } from "components/elementos";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import { useEffect, useState } from "react";
import User from "assets/images/user-placeholder.png";
import Placeholder from "assets/images/placeholder.jpg";
import Placeholder2 from "assets/images/placeholder2.png";
import Placeholder3 from "assets/images/placeholder3.jpg";
import Placeholder4 from "assets/images/placeholder4.png";
import Placeholder5 from "assets/images/placeholder5.png";
import Placeholder6 from "assets/images/placeholder6.jpg";
import { CartaoInfo } from "components/info";
import { Botao } from "components/form";
import { Imagem } from "components/elementos/imagem/Imagem";
import { ComentarioSeccao } from "../components/comentario/ComentarioSeccao";
import { Album } from "../components/Album";
import { ActionBar } from "../components/ActionBar";

export function AtividadeDetalhe() {
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
			imagem: Placeholder,
			utilizador_imagem: User,
		});
	}, []);

	const images = [Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6];

	return (
		<article className="AtividadeDetalhe" id={data.id}>
			<section className="atividade-detalhe-conteudo">
				<div className="atividade-detalhe-info">
					<CartaoInfo imagem={data.utilizador_imagem} titulo={data.utilizador} subtitulo={data.date} />
				</div>
				<div className="atividade-detalhe-titulo">
					<Texto size={3} className="">
						{data.titulo}
					</Texto>
				</div>
				<div className="atividade-detalhe-descricao">
					<Texto className="">{data.descricao}</Texto>
				</div>
				<div className="atividade-detalhe-imagem">
					<Imagem src={Placeholder} style={{ width: "100px", height: "100px" }} />
				</div>
				<div className="atividade-detalhe-botoes">
					<ActionBar hideComentario={true}/>
					<div className="d-flex gap-2 mt-2">
						<Botao>Formulário</Botao>
						<Botao>Editar</Botao>
						<Botao>Apagar</Botao>
					</div>
				</div>
			</section>
			<section className="atividade-detalhe-interacoes">
				<Album imagens={images} />
				<ComentarioSeccao />
			</section>
		</article>
	);
}
