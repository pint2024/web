import { Icon, Texto } from "components/index";
import { GOSTO_ANIMATION } from "data/constants";
import { COMMON_SIZES } from "data/data";
import { useState } from "react";

export function ControlosInteracao({ hideComentario = false }) {
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
				<Texto size={COMMON_SIZES.FS4}>{classificacao}</Texto>
			</div>
			{!hideComentario ? (
				<div className="d-flex align-items-center gap-2 post-icon">
					<Icon iconName="ChatLeft" />
					<Texto size={COMMON_SIZES.FS4}>{comentarios}</Texto>
				</div>
			) : null}
		</div>
	);
}
