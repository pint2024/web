import { Texto } from "components/elementos";
import { Botao } from "components/form";
import { ImageSlider } from "components/imagemSlider/ImageSlider";

export function Album({ imagens }) {
	return (
		<div className="atividade-detalhe-album">
			<Texto size={4}>Album</Texto>
			<div className="App">
				<div style={{ padding: "10px" }}>
					<ImageSlider images={imagens} />
				</div>
			</div>
			<Botao>Adicionar Imagem</Botao>
		</div>
	);
};