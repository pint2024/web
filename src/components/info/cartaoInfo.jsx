import { Texto } from "components/elementos/index";
import { InfoLayout } from "./infoLayout";

export const CartaoInfo = ({ imagem, titulo, subtitulo }) => {
	return (
		<>
			<InfoLayout
				imagem={imagem}
				header={<Texto>{titulo}</Texto>}
				info={
					<Texto size={0} type="secondary">
						{subtitulo}
					</Texto>
				}
			/>
		</>
	);
};
