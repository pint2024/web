import { Texto, Imagem } from "components/index";
import { COMMON_SIZES } from "data/data";
import "./album.css";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";

export function Album({ imagens }) {
	return (
		<div className="conteudo-detalhe-album">
			<Texto size={COMMON_SIZES.FS4}>Album</Texto>
			<div className="App">
				<div className="galeria">
					{imagens.map((imagem, index) => (
						<ImagemModal imagemSelecionada={imagem}>
							<Imagem key={index} className="galeria-imagem-item" src={imagem} />
						</ImagemModal>
					))}
				</div>
			</div>
		</div>
	);
}
