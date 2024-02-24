import "./styles.css";
import Cartao from "./cartao";
import Texto from "../texto/texto";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";

function Post({ titulo, descricao, utilizador = "", date = "", numLikes = 0, numComments = 0, handleClick = null }) {
	const [likes, setlikes] = useState(numLikes);
	const [comments, setcomments] = useState(numComments);

	const handleLikesClick = () => {
		setlikes(likes + 1);
	};

	return (
		<div className="Post">
			<Cartao
				titulo={titulo}
				descricao={descricao}
				date={date}
				handleClick={handleClick}
				utilizador={utilizador}
				footer={
					<div className="d-flex gap-5 mt-4">
						<div className="d-flex align-items-center gap-2 post-icon" onClick={handleLikesClick}>
							<Icon.HandThumbsUp />
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
