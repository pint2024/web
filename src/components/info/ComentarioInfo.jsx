import { Texto } from "components/elementos";
import { InfoLayout } from "./InfoLayout";

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
