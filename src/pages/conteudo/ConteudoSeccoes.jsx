import { Icon, Navegar, Post, Texto } from "components";
import { PLACEHOLDER_TITLE } from "data/constants";
import Placeholder from "assets/images/placeholder.png";
import Image from "assets/images/user-default.png";
import "./conteudo-seccoes.css";
import { COMMON_SIZES } from "data/data";

export function ConteudoSeccoes({ titulo, routeTo }) {
	return (
		<article className="mt-4">
			<Navegar to={routeTo} className="navegar">
				<div className="navegar-content">
					<Texto size={COMMON_SIZES.FS5}>{titulo}</Texto>
					<Icon size={COMMON_SIZES.FS4} iconName={"ArrowRightShort"} />
				</div>
			</Navegar>
			<div className="d-flex gap-4 horizontal-cards">
				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					topico={"Desporto"}
					utilizador_imagem={Image}
					utilizador_nome={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					topico={"Desporto"}
					utilizador_imagem={Image}
					utilizador_nome={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					topico={"Desporto"}
					utilizador_imagem={Image}
					utilizador_nome={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					topico={"Desporto"}
					utilizador_imagem={Image}
					utilizador_nome={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					topico={"Desporto"}
					utilizador_imagem={Image}
					utilizador_nome={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>
			</div>
		</article>
	);
}
