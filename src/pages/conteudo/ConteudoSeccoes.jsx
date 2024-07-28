import { Icone, Navegar, Post, Texto } from "components";
import "./conteudo-seccoes.css";
import { COMMON_SIZES } from "data/data";
import { useEffect, useState } from "react";
import { HorizontalScroll } from "components/container/horizontalScroll/HorizontalScroll";

export function ConteudoSeccoes({ titulo, icon, routeTo, data }) {
	const [dataConteudo, setdataConteudo] = useState([]);

	useEffect(() => {
		setdataConteudo(data);
	}, [data]);

	return (
		<article className="mt-4">
			<HorizontalScroll
				header={
					<Navegar to={routeTo} className="navegar gap-2">
						<Icone size={COMMON_SIZES.FS5} iconName={icon} />
						<Texto size={COMMON_SIZES.FS5}>{titulo}</Texto>
					</Navegar>
				}
			>
				{dataConteudo?.map((item) => (
					<Post
						id={item.id}
						titulo={item.titulo}
						topico={item.conteudo_subtopico.area}
						utilizador={item.conteudo_utilizador}
						date={item.data_criacao}
						imagem={item.imagem}
					/>
				))}
			</HorizontalScroll>
		</article>
	);
}
