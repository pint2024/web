import Texto from "components/texto/texto";
import { UtilizadorInfo } from "./utilizadorInfo";

export const ContactoInfo = ({ imagem, titulo, data, subtitulo }) => {
	return (
		<>
			<UtilizadorInfo
				imagem={imagem}
				header={
					<div className="d-flex gap-3 align-items-center">
						<div>
							<Texto>{titulo}</Texto>
						</div>
						<div>
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
