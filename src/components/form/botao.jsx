import { Link } from "react-router-dom";

import "./botao-animation.css";
import { Outlet } from 'react-router-dom';

export function Botao({ variant = "primary", linkTo = null, handleClick = null, children }) {
	return (
		<section>
			<Link to={linkTo}>
				<button type="button" className={"Button btn btn-block btn-" + variant + " d-flex gap-2 align-items-center"} onClick={handleClick}>
						{children}
				</button>
			</Link>
		</section>
	);
}
