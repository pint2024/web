import { Texto } from "components/elementos";
import { Imagem } from "components/elementos/imagem/Imagem";
import { useEffect, useState } from "react";
import { DataRelativa } from "utils/date.utils";

export function OthersMensagem({ id, imagem, nome, data, mensagem }) {
	const [dataMsg, setdataMsg] = useState();

	useEffect(() => {
		const formataData = () => {
			setdataMsg(DataRelativa(data));
		}
		formataData();
	}, [data, setdataMsg]);

	return (
		<li className="conversa-mensagem d-flex align-items-center gap-2 mt-3">
			<Imagem src={imagem} className="card-user-picture" />
			<div>
				<div className="d-flex gap-2 align-items-center">
					<Texto size={3}>{nome}</Texto>
					<Texto size={0}>{dataMsg}</Texto>
				</div>
				<Texto>{mensagem}</Texto>
			</div>
		</li>
	);
}