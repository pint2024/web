import UtilizadorDefault from "assets/images/user-default.png";
import { Imagem } from "./Imagem";

export function ImagemUtilizador({ src = "", alt = "", ...props }) {
	return (
		<>
			<Imagem alt={alt} src={src ? src : UtilizadorDefault} {...props} />
		</>
	);
}
