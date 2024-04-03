import { Texto } from "components/elementos/index";
import { InfoLayout } from "./1InfoLayout";

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
