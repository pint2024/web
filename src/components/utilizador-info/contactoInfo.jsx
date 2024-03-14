import Texto from "components/texto/texto";
import { UtilizadorInfo } from "./utilizadorInfo";
import { useEffect, useState } from "react";
import { Tempo } from "utils/date.utils";

export const ContactoInfo = ({ imagem, titulo, data, subtitulo }) => {
	const [dataMsg, setdataMsg] = useState();

	useEffect(() => {
		const formataData = () => {
			setdataMsg(Tempo(data));
		}
		formataData();
	}, [data, setdataMsg]);

	return (
		<>
			<UtilizadorInfo
				imagem={imagem}
				header={
					<div className="d-flex align-items-center">
						<div>
							<Texto>{titulo}</Texto>
						</div>
						<div className="ms-auto" style={{ marginRight: "15px" }}>
							<Texto size={0}>{dataMsg}</Texto>
						</div>
					</div>
				}
				info={
					<Texto size={0} type="secondary">
						{subtitulo}
					</Texto>
				}
			/>
		</>
	);
};
