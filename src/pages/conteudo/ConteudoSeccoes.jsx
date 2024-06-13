import { Icone, Navegar, Post, Texto } from "components";
import { PLACEHOLDER_TITLE } from "data/constants";
import Placeholder from "assets/images/placeholder.png";
import Image from "assets/images/user-default.png";
import "./conteudo-seccoes.css";
import { COMMON_SIZES } from "data/data";
import { useEffect, useState } from "react";

export function ConteudoSeccoes({ titulo, routeTo, data }) {
	const [dataConteudo, setdataConteudo] = useState([]);

	useEffect(() => {
		setdataConteudo(data);
	}, []);

	return (
		<article className="mt-4">
			<Navegar to={routeTo} className="navegar">
				<div className="navegar-content">
					<Texto size={COMMON_SIZES.FS5}>{titulo}</Texto>
					<Icone size={COMMON_SIZES.FS4} iconName={"ArrowRightShort"} />
				</div>
			</Navegar>
			<div className="d-flex gap-4 horizontal-cards">
				{dataConteudo?.map((item) => (
					<Post
						id={item.id}
						titulo={item.titulo}
						topico={item.conteudo_subtopico.area}
						utilizador_imagem={item.conteudo_utilizador.imagem}
						utilizador_nome={item.conteudo_utilizador.nome + " " + item.conteudo_utilizador.sobrenome}
						date={item.data_criacao}
						imagem={Placeholder} //item.imagem
					/>
				))}
			</div>
		</article>
	);
}
