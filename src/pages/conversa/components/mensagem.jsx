import Texto from "components/texto/texto";

export function Mensagem({ id, imagem, nome, data, mensagem, isMe = false }) {
	return (
		<li className="d-flex align-items-center gap-2 mt-3">
			<img src={imagem} alt="" className="card-user-picture" />
			<div>
				<div className="d-flex gap-2 align-items-center">
					<Texto size={3}>{nome}</Texto>
					<Texto size={0}>{data}</Texto>
				</div>
				<Texto>{mensagem}</Texto>
			</div>
		</li>
	);
}