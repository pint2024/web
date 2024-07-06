import { Imagem } from "components/index";
import user2 from "assets/images/examples/e-2.jpg";

import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";

export function PaginaInicial() {
	return (
		<>
			Página Inicial
			<ImagemModal imagemSelecionada={user2} description={"oi"}>
				<Imagem src={user2} />
			</ImagemModal>
		</>
	);
}
