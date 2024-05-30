import { Texto, PequenoPerfil, Imagem, Botao, ControlosInteracao, Rotulo } from "components/index";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import { useEffect, useState } from "react";
import User from "assets/images/user-default.png";
import Ex1 from "assets/images/examples/e-1.jpg";
import Ex2 from "assets/images/examples/e-2.jpg";
import Ex3 from "assets/images/examples/e-3.jpg";
import Ex4 from "assets/images/examples/e-4.jpg";
import Ex5 from "assets/images/examples/e-5.jpg";
import { Album } from "./Album";
import { ComentarioSeccao } from "./ComentarioSeccao";
import "./conteudo-detalhe.css"
import { BUTTON_VARIANTS, COMMON_SIZES, COMMON_TYPES } from "data/data";

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

	return (
		<article className="AtividadeDetalhe" id={data.id}>
			<section className="conteudo-detalhe-conteudo">
				<div className="conteudo-detalhe-info">
					<PequenoPerfil imagem={data.utilizador_imagem} nome={data.utilizador} data={data.date} />
				</div>
				<div className="gap-2 d-flex mt-3 mb-2">
					<Rotulo info={"Tipo de Conteudo"} backgroundColor={"gold"} textColor={COMMON_TYPES.PRIMARIO} />
					<Rotulo info={"Subtópico"} />
				</div>
				<div className="conteudo-detalhe-titulo">
					<Texto size={COMMON_SIZES.FS3} className="">
						{data.titulo}
					</Texto>
				</div>
				<div className="conteudo-detalhe-descricao">
					<Texto className="">{data.descricao}</Texto>
				</div>
				<div className="conteudo-detalhe-imagem">
					<Imagem src={data.imagem} className={'conteudo-detalhe-imagem'}/>
				</div>
				<div className="conteudo-detalhe-botoes">
					<ControlosInteracao hideComentario={true} />
					<div className="d-flex gap-2 mt-2">
						<Botao>Participar</Botao>
						<Botao variant={BUTTON_VARIANTS.SECUNDARIO}>Editar</Botao>
						<Botao variant={BUTTON_VARIANTS.PERIGO}>Apagar</Botao>
					</div>
				</div>
			</section>
			<section className="conteudo-detalhe-interacoes">
				<Album imagens={[Ex1, Ex2, Ex3, Ex4]} />
				<ComentarioSeccao />
			</section>
		</article>
	);
}
