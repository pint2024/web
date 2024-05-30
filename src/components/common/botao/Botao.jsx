import { Link } from "react-router-dom";

import "./botao.css";
import { Texto } from "components/index";
import { COMMON_SIZES } from "data/data";

export function Botao({ variant = "primario", route = null, children, ...props }) {
	const validVariants = ["primario", "secundario", "sucesso", "perigo"];
	const isVariantValid = validVariants.includes(variant) ? true : false;

	const renderBotao = () => {
		return (
			<button type="button" className={"botao botao-" + variant + " d-flex gap-2 align-items-center"} {...props}>
				{children}
			</button>
		);
	};

	return (
		<>
			{isVariantValid ? (
				route ? (
					<Link to={route} className="d-inline-block">
						{renderBotao()}
					</Link>
				) : (
					renderBotao()
				)
			) : (
				<Texto size={COMMON_SIZES.FS4}>Variante inválida</Texto>
			)}
		</>
	);
}
