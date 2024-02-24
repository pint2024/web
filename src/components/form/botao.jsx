import { Link } from "react-router-dom";

import "./botao-animation.css";
import { Outlet } from 'react-router-dom';

export function Botao({ variant = "primary", route = null, handleClick = null, children }) {
	return (
		<section>
			<Link to={route} className="d-inline-block">
				<button type="button" className={"Button btn btn-block btn-" + variant + " d-flex gap-2 align-items-center"} onClick={handleClick}>
						{children}
				</button>
			</Link>
		</section>
	);
}
