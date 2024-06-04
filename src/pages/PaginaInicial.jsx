import { Imagem } from "components/index";
import { useState } from "react";
import user from "assets/images/examples/e-4.jpg";
import user2 from "assets/images/examples/e-3.jpg";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";

export function PaginaInicial() {
	const [rating, setRating] = useState(0);

	function openSlide() {}

	return (
		<>
			Página Inicial
			<ImagemModal imageSrc={user2} description={"oi"}>
				<Imagem src={user2} />
			</ImagemModal>
		</>
	);
}
