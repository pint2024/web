import { Texto, Imagem, Icone, Popup, Botao, ImageBox } from "components/index";
import { BUTTON_VARIANTS, COMMON_SIZES } from "data/data";
import "./album.css";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { useEffect, useState } from "react";
import { ApiRequest } from "api/apiRequest";
import { useCarregando } from "hooks/useCarregando";

export function Album({ id }) {
	const [album, setalbum] = useState([]);
	const [isPopupOpen, setisPopupOpen] = useState(false);
	const [newImagens, setnewImagens] = useState([]);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchAlbumData();
	}, []);

	const fetchAlbumData = async () => {
		startLoading();
		const data = await ApiRequest.listar("album", { conteudo: id });
		setalbum(data);
		stopLoading();
	};

	if (!album) return;

	const handleAlbumPopupOpen = () => {
		setisPopupOpen(true);
	};

	const handleAlbumPopupClose = () => {
		setisPopupOpen(false);
	};

	const handleAlbumAdd = async () => {
		startLoading();
		await ApiRequest.criar_with_files("album", { conteudo: id, imagem: newImagens }, "imagem");
		await fetchAlbumData();
		handleAlbumPopupClose();
		stopLoading();
	};

	const createPopupAddAlbum = () => {
		return (
			isPopupOpen && (
				<>
					<Popup
						onClose={handleAlbumPopupClose}
						headerTitle={"Adicionar Imagem"}
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
					{Object.values(album).map(({ id, imagem }) => imagem && (
						<ImagemModal imagemSelecionada={imagem}>
							<Imagem key={id} className="galeria-imagem-item" src={imagem} />
						</ImagemModal>
					))}
				</div>
			</div>
		</div>
	);
}
