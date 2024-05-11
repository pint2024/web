import { Texto } from "..";
import "./textoDestaque.css"


export const TextoDestaque = ({ children }) => {
	return (
		<div className="texto-destaque">
			{children}
		</div>
	);
};
