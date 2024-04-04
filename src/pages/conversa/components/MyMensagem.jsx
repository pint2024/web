import { Texto } from "components/elementos";
import { useEffect, useState } from "react";
import { DataRelativa } from "utils/date.utils";

export function MyMensagem({ id, imagem, nome, data, mensagem }) {
	const [dataMsg, setdataMsg] = useState();

	useEffect(() => {
		const formataData = () => {
			setdataMsg(DataRelativa(data));
		}
		formataData();
	}, [data, setdataMsg]);

	return (
		<li className="conversa-mensagem d-flex justify-content-end align-items-center gap-2 mt-3">
			<div>
				<div className="d-flex gap-2 align-items-center">
					<Texto size={3}>{nome}</Texto>
					<Texto size={0}>{dataMsg}</Texto>
				</div>
				<div className="text-end">
					<Texto>{mensagem}</Texto>
				</div>
			</div>
			<img src={imagem} alt="" className="card-user-picture" />
		</li>
	);
}