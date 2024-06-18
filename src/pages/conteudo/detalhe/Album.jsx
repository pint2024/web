import { Texto, Imagem, Icone, Popup, Botao, ImageBox } from "components/index";
import { BUTTON_VARIANTS, COMMON_SIZES } from "data/data";
import "./album.css";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { useState } from "react";
import { Request } from "api";

export function Album({ id, imagens }) {
	const [isPopupOpen, setisPopupOpen] = useState(false);
	const [newImagens, setnewImagens] = useState([]);

	const handleAlbumPopupOpen = () => {
		setisPopupOpen(true);
	};

	const handleAlbumPopupClose = () => {
		setisPopupOpen(false);
	};

	const handleAlbumAdd = async () => {
		console.log("handleAlbumAdd");
		console.log(newImagens);
		await Request.criar("album", { conteudo: id, imagem: newImagens });
	};

	const createPopupAddAlbum = () => {
		return (
			isPopupOpen && (
				<>
					<Popup
						onClose={handleAlbumPopupClose}
						headerTitle={"Adicionar Album"}
						body={
							<>
								<ImageBox handleChange={setnewImagens} allowMultiple={true} />
							</>
						}
						footer={
							<div className="d-flex align-items-center gap-2">
								<Botao variant={BUTTON_VARIANTS.SUCESSO} onClick={handleAlbumAdd}>
									Adicionar
								</Botao>
								<Botao variant={BUTTON_VARIANTS.PERIGO} onClick={() => setisPopupOpen(false)}>
									Cancelar
								</Botao>
							</div>
						}
					/>
				</>
			)
		);
	};

	return (
		<div className="conteudo-detalhe-album">
			{createPopupAddAlbum()}
			<div className="d-flex align-items-center gap-2">
				<Texto size={COMMON_SIZES.FS4}>Album</Texto>
				<Icone iconName="PlusLg" className="icon-hover" onClick={handleAlbumPopupOpen} />
			</div>
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
