import { Icon, Texto } from "components/elementos";
import { GOSTO_ANIMATION } from "data/constants";
import { useState } from "react";

export function InteractionItems({ hideComentario = false }) {
	const [isClassificado, setisClassificado] = useState();
	const [classificacao, setclassificacao] = useState();
	const [comentarios, setcomentarios] = useState();
	const [animate, setAnimate] = useState(false);

	const handleLikesClick = (e) => {
		stopPropagation(e);
		if (!isClassificado) {
			setclassificacao(classificacao + 1);
			setisClassificado(true);
			setAnimate(true);

			setTimeout(() => {
				setAnimate(false);
			}, 1000);
		} else {
			setclassificacao(classificacao - 1);
			setisClassificado(false);
		}
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	return (
		<div className="d-flex gap-5 mt-4">
			<div
				className={`d-flex align-items-center gap-2 post-icon ${animate ? GOSTO_ANIMATION : ""}`}
				onClick={handleLikesClick}
			>
				{isClassificado ? (
					<Icon iconName="HandThumbsUpFill" className="icon-color cursor-pointer" />
				) : (
					<Icon iconName="HandThumbsUp" className="cursor-pointer" />
				)}
				<Texto size={0}>{classificacao}</Texto>
			</div>
			{!hideComentario ? (
				<div className="d-flex align-items-center gap-2 post-icon">
					<Icon iconName="ChatLeft" />
					<Texto size={0}>{comentarios}</Texto>
				</div>
			) : null}
		</div>
	);
}
