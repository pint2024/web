import React from "react";
import { Link } from "react-router-dom";

import './reporting.css'

/** Componentes */
import BasicHeader from "src/components/BasicHeader/basicHeader";


export function ReportingComponent({ active }) {
	return (
		<div className="container">
			<div className="subheader">
				<ul className="mt-3">
					<Link to="/reporting/candidaturas">
						<li className={active === 1 ? "ativo" : ""}>Candidaturas</li>
					</Link>
					<Link to="/reporting/contratacoes">
						<li className={active === 2 ? "ativo" : ""}>Contratações</li>
					</Link>
					<Link to="/reporting/negocios">
						<li className={active === 3 ? "ativo" : ""}>Negócios</li>
					</Link>
					<Link to="/reporting/ideias">
						<li className={active === 4 ? "ativo" : ""}>Ideias</li>
					</Link>
					<Link to="/reporting/registos">
						<li className={active === 5 ? "ativo" : ""}>Registos</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}