import { useState } from "react";
import { GOSTO_ANIMATION } from "data/constants";
import { usePopup } from "hooks/usePopup";
import { CaixaTexto } from "components/form/caixaTexto/caixaTexto";
import { Link } from "react-router-dom";
import { CartaoInfo, Rotulo } from "components/info/index";
import User from "assets/images/logo2.png";
import { Icon, Texto } from "components/elementos/index";
import { Comentario } from "../comentario/comentario";

import "./post.css";

export function Post({ data }) {
	const [formComentario, setFormComentario] = useState("");
	const [likes, setLikes] = useState(data.gostos ? data.gostos.length : 0);
	const [comments, setComments] = useState(data.comentarios ? data.comentarios.length : 0);
	const [liked, setLiked] = useState(false);
	const [animate, setAnimate] = useState(false);
	const { puSet, puCreate, puOpen } = usePopup();

	const handleLikesClick = (e) => {
		stopPropagation(e);
		if (!liked) {
			setLikes(likes + 1);
			setLiked(true);
			setAnimate(true);

			setTimeout(() => {
				setAnimate(false);
			}, 1000);
		} else {
			setLikes(likes - 1);
			setLiked(false);
		}
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	const handleOpenPopup = () => {
		setFormComentario("ola");
		puSet({
			headerInfo: <CartaoInfo titulo={data.utilizador.nome_completo} subtitulo={"à 1h"} imagem={User} />,
			headerTitle: data.titulo,
			headerIcons: (
				<Link to={data.id}>
					<Icon iconName="ArrowsAngleExpand" />
				</Link>
			),
			body: (
				<div>
					<div className="comentario-modal-post">
						<Texto>{data.descricao}</Texto>
					</div>
					<div className="comentario-modal-elements">
						<div className="d-flex gap-5 mt-4">
							<div
								className={`d-flex align-items-center gap-2 post-icon ${animate ? GOSTO_ANIMATION : ""}`}
								onClick={handleLikesClick}
							>
								{liked ? (
									<Icon iconName="HandThumbsUpFill" className="icon-color" />
								) : (
									<Icon iconName="HandThumbsUp" />
								)}
								<Texto size={0}>{likes}</Texto>
							</div>
							<div className="d-flex align-items-center gap-2 post-icon">
								<Icon iconName="ChatLeft" />
								<Texto size={0}>{comments}</Texto>
							</div>
						</div>
					</div>
					<div className="comentario-modal-add-comment gap-4 mt-2">
						<CaixaTexto
							handleChange={(e) => setFormComentario(e)}
							value={formComentario}
							placeholder="Adicionar Comentário"
						/>
					</div>
					<div className="comentario-modal-comments">
						{data.comentarios.map((comentario) => (
							<div className="mt-3">
								<Comentario imagem={User} comentario={comentario.comentario} />
								{/*comentario.subcomentarios.map((subcomentario) => (
									<>
										<Comentario imagem={User} comentario={subcomentario.subcomentario} />
									</>
								))*/}
							</div>
						))}
					</div>
				</div>
			),
		});
		puOpen();
	};

	return (
		<article className="Post" id={data.id}>
			{puCreate()}
			<div className="card-hover post-content cartao-corpo card-body main-cartao" onClick={handleOpenPopup} id={data.id}>
				<div className="d-flex justify-content-between align-items-center">
					<Rotulo info={data.topico} />
					<Icon iconName="ThreeDotsVertical" className="icon-hover" size={3} />
				</div>
				<div className="d-flex mt-2">
					<CartaoInfo imagem={User} titulo={data.utilizador.nome_completo} subtitulo={data.date} />
				</div>
				<div className="cartao-corpo-titulo" title={data.titulo}>
					<Texto size={3} className="card-title-header">
						{data.titulo}
					</Texto>
				</div>
				<div className="cartao-corpo-descricao">
					<Texto className="card-body-descricao">{data.descricao}</Texto>
				</div>
				<div className="remove-user-select">
					<div className="d-flex gap-5 mt-4">
						<div
							className={`d-flex align-items-center gap-2 post-icon ${animate ? GOSTO_ANIMATION : ""}`}
							onClick={handleLikesClick}
						>
							{liked ? (
								<Icon iconName="HandThumbsUpFill" className="icon-color" />
							) : (
								<Icon iconName="HandThumbsUp" />
							)}
							<Texto size={0}>{likes}</Texto>
						</div>
						<div className="d-flex align-items-center gap-2 post-icon">
							<Icon iconName="ChatLeft" />
							<Texto size={0}>{comments}</Texto>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
