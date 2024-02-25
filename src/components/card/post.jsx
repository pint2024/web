import "./styles.css";
import Cartao from "./cartao";
import Texto from "../texto/texto";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { GOSTO_ANIMATION } from "../../data/constants";
import { Botao } from "../form/botao";
import { usePopup } from "../../hooks/usePopup";
import { CaixaTexto } from "../form/caixaTexto";

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
			headerTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			headerSubtitle: "Joaumzin Gaimeplais",
			headerIcons: (
				<>
					<Icon.ArrowsAngleExpand />
				</>
			),
			body: (
				<div className="">
					<section className="comentario-modal-post">
						<Texto>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
							leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
							with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established
							fact that a reader will be distracted by the readable content of a page when looking at its layout.
							The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
							opposed to using 'Content here, content here\', making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
							search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
							evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</Texto>
					</section>
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
			footer: <Botao>Adicionar</Botao>,
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
