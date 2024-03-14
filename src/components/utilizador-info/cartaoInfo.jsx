import Texto from "components/texto/texto";
import { UtilizadorInfo } from "./utilizadorInfo";

export const CartaoInfo = ({ imagem, titulo, subtitulo }) => {
	return (
		<>
			<UtilizadorInfo
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
