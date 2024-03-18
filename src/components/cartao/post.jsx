import "./cartao.css";
import Cartao from "./cartao";
import Texto from "components/texto/texto";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { GOSTO_ANIMATION } from "data/constants";
import { usePopup } from "modules/hooks/usePopup";
import { CaixaTexto } from "components/form/caixaTexto/caixaTexto";
import { Link } from "react-router-dom";
import { CartaoInfo, Perfil } from "components/utilizador-info/cartaoInfo";
import User from "assets/images/logo2.png";
import { Divider } from "components/divider/divider";
import { TinyInfo } from "components/detalhes/tinyInfo";

function Post({ id, titulo, descricao, topico = null, utilizador = "", date = "", numLikes = 0, numComments = 0 }) {
	const [likes, setLikes] = useState(numLikes);
	const [comments, setComments] = useState(numComments);
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
					<Icon.ArrowsAngleExpand />
				</Link>
			),
			body: (
				<div>
					<section className="comentario-modal-post">{descricao}</section>
					<section className="comentario-modal-elements">
						<div className="d-flex gap-5 mt-4">
							<div
								className={`d-flex align-items-center gap-2 post-icon ${animate ? GOSTO_ANIMATION : ""}`}
								onClick={handleLikesClick}
							>
								{liked ? <Icon.HandThumbsUpFill className="icon-color" /> : <Icon.HandThumbsUp />}
								<Texto size={0}>{likes}</Texto>
							</div>
							<div className="d-flex align-items-center gap-2 post-icon">
								<Icon.ChatLeft />
								<Texto size={0}>{comments}</Texto>
							</div>
						</div>
					</section>
					<section className="comentario-modal-add-comment gap-4">
						<CaixaTexto value="Adicione um comentário" />
					</section>
					<section className="comentario-modal-comments"></section>
				</div>
			),
		});
		puOpen();
	};

	return (
		<div className="Post" id={id}>
			{puCreate()}
			<Divider />
			<div className="card-hover post-content cartao-corpo card-body main-cartao" onClick={handleOpenPopup} id={id}>
				<TinyInfo info={topico} />
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
							{liked ? <Icon.HandThumbsUpFill className="icon-color" /> : <Icon.HandThumbsUp />}
							<Texto size={0}>{likes}</Texto>
						</div>
						<div className="d-flex align-items-center gap-2 post-icon">
							<Icon.ChatLeft />
							<Texto size={0}>{comments}</Texto>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
