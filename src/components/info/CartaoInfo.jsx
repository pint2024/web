import { Texto } from "components/elementos";
import { InfoLayout } from "./InfoLayout";

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
