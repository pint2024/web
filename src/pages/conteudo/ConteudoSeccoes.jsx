import { Icon, Navegar, Post, Texto } from "components";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import Placeholder from "assets/images/placeholder.jpg";

export function ConteudoSeccoes({ titulo, routeTo }) {
	return (
		<article className="mt-4">
			<Navegar to={routeTo} className="d-flex align-items-center">
				<Texto size={5}>{titulo}</Texto>
				<Icon size={4} iconName={"ArrowRightShort"} />
			</Navegar>
			<div className="d-flex gap-4">
				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
					topico={"Desporto"}
					utilizador={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
					topico={"Desporto"}
					utilizador={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
					topico={"Desporto"}
					utilizador={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
					topico={"Desporto"}
					utilizador={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>

				<Post
					id={1}
					titulo={PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE}
					descricao={PLACEHOLDER_TEXT + PLACEHOLDER_TEXT}
					topico={"Desporto"}
					utilizador={"Lucas Sebastião"}
					date={"25/04/2024"}
					imagem={Placeholder}
				/>
			</div>
		</article>
	);
}
