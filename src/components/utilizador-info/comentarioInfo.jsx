import Texto from "components/texto/texto";
import { UtilizadorInfo } from "./utilizadorInfo";

export const ComentarioInfo = ({ imagem, comentario }) => {
	return (
		<>
			<UtilizadorInfo
				imagem={imagem}
				header={<Texto>{comentario}</Texto>}
			/>
		</>
	);
};
