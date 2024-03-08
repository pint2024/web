import Texto from "components/texto/texto";
import { UtilizadorInfo } from "./utilizadorInfo";

export const ContactoInfo = ({ imagem, titulo, data, subtitulo }) => {
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
							<Texto size={0}>{data}</Texto>
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
