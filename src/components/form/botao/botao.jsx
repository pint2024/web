import { Link } from "react-router-dom";

import "./botao.css";
import { Texto } from "components/elementos/index";

export function Botao({ variant = "primario", route = null, handleClick = null, disabled = false, children }) {
	const validVariants = ["primario", "secundario", "sucesso", "perigo"];
	const isVariantValid = validVariants.includes(variant) ? true : false;

	return (
		<>
			{isVariantValid ? (
				<Link to={route} className="d-inline-block">
					<button
						type="button"
						disabled={disabled}
						className={"botao botao-" + variant + " d-flex gap-2 align-items-center"}
						onClick={handleClick}
					>
						{children}
					</button>
				</Link>
			) : (
				<Texto size={4}>Variante inválida</Texto>
			)}
		</>
	);
}
