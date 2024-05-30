import { Texto, ImageSlider, Botao } from "components/index";
import { COMMON_SIZES } from "data/data";

export function Album({ imagens }) {
	return (
		<div className="conteudo-detalhe-album">
			<Texto size={COMMON_SIZES.FS4}>Album</Texto>
			<div className="App">
				<div style={{ padding: "10px" }}>
					<ImageSlider images={imagens} />
				</div>
			</div>
			<Botao>Adicionar Imagem</Botao>
		</div>
	);
};