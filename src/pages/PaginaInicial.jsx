import { Imagem } from "components/index";
import { useState } from "react";
import user1 from "assets/images/examples/e-1.jpg";
import user2 from "assets/images/examples/e-2.jpg";
import user3 from "assets/images/examples/e-3.jpg";
import user4 from "assets/images/examples/e-4.jpg";
import user5 from "assets/images/examples/e-5.jpg";
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
