import { Texto } from "components/elementos/index";
import { InfoLayout } from "./infoLayout";

export const ComentarioInfo = ({ imagem, comentario }) => {
	return (
		<>
			<InfoLayout
				imagem={imagem}
				header={<Texto>{comentario}</Texto>}
			/>
		</>
	);
};
