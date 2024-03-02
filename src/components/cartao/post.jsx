import "./cartao.css";
import Cartao from "./cartao";
import Texto from "components/texto/texto";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { GOSTO_ANIMATION } from "data/constants";
import { usePopup } from "hooks/usePopup";
import { CaixaTexto } from "components/form/caixaTexto";
import { Link } from "react-router-dom";
import { SmallUser } from "components/utilizador-info/smallUser";
import User from "assets/logo2.png";

function Post({ id, titulo, descricao, utilizador = "", date = "", numLikes = 0, numComments = 0 }) {
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
			headerInfo: <SmallUser nome={'Joaumzin Gaimeplais'} data={'à 1h'} imagem={User} /> ,
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
			<Cartao
				id={id}
				titulo={titulo}
				descricao={descricao}
				date={date}
				utilizador={utilizador}
				handleClick={handleOpenPopup}
				footer={
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
				}
			/>
		</div>
	);
}

export default Post;
