import Texto from "components/texto/texto";

export function MyMensagem({ id, imagem, nome, data, mensagem }) {
	return (
		<li className="d-flex justify-content-end align-items-center gap-2 mt-3">
			<div>
				<div className="d-flex gap-2 align-items-center">
					<Texto size={3}>{nome}</Texto>
					<Texto size={0}>{data}</Texto>
				</div>
				<Texto>{mensagem}</Texto>
			</div>
			<img src={imagem} alt="" className="card-user-picture" />
		</li>
	);
}