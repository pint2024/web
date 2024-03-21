import "./cartao.css";
import Texto from "components/texto/texto";
import { useState } from "react";
import { GOSTO_ANIMATION } from "data/constants";
import { usePopup } from "modules/hooks/usePopup";
import { CaixaTexto } from "components/form/caixaTexto/caixaTexto";
import { Link } from "react-router-dom";
import { CartaoInfo, Perfil } from "components/utilizador-info/cartaoInfo";
import User from "assets/images/logo2.png";
import { TinyInfo } from "components/detalhes/tinyInfo";
import { Icon } from "components/icons/icon";
import { Comentario } from "./comentario";

function Post({ id, titulo, descricao, topico = null, utilizador = "", date = "", gostos = 0, comentarios = 0 }) {
	const [likes, setLikes] = useState(gostos ? gostos.length : 0);
	const [comments, setComments] = useState(comentarios ? comentarios.length : 0);
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
		puSet({
			headerInfo: <CartaoInfo titulo={"Joaumzin Gaimeplais"} subtitulo={"à 1h"} imagem={User} />,
			headerTitle: <>{titulo}</>,
			headerIcons: (
				<Link to={id}>
					<Icon iconName="ArrowsAngleExpand" />
				</Link>
			),
			body: (
				<div>
					<div className="comentario-modal-post">{descricao}</div>
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
					<div className="comentario-modal-add-comment gap-4">
						<CaixaTexto value="Adicione um comentário" />
					</div>
					<div className="comentario-modal-comments">
						{comentarios.map((comentario) => (
							<div className="mt-3">
								<Comentario comentario={comentario.comentario} />
							</div>
						))}
					</div>
				</div>
			),
		});
		puOpen();
	};

	return (
		<article className="Post" id={id}>
			{puCreate()}
			<div className="card-hover post-content cartao-corpo card-body main-cartao" onClick={handleOpenPopup} id={id}>
				<div className="d-flex justify-content-between align-items-center">
					<TinyInfo info={topico} />
					<Icon iconName="ThreeDotsVertical" className="icon-hover" size={3} />
				</div>
				<div className="d-flex mt-2">
					<CartaoInfo imagem={User} titulo={utilizador} subtitulo={date} />
				</div>
				<div className="cartao-corpo-titulo" title={titulo}>
					<Texto size={3} className="card-title-header">
						{titulo}
					</Texto>
				</div>
				<div className="cartao-corpo-descricao">
					<Texto className="card-body-descricao">{descricao}</Texto>
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

export default Post;
