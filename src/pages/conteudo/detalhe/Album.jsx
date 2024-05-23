import { Texto, ImageSlider, Botao } from "components/index";

export function Album({ imagens }) {
	return (
		<div className="conteudo-detalhe-album">
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