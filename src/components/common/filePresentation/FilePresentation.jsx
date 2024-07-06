import PDFIcon from "assets/images/pdf-icon.png";
import { Imagem, Navegar } from "components";

export function FilePresentation({ path, displayName }) {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Imagem src={PDFIcon} style={{ marginRight: "8px" }} />
			<Navegar to={path} target="_blank" download="Credenciais.pdf">
				{displayName}
			</Navegar>
		</div>
	);
}
