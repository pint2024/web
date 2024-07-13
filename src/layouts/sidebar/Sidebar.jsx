import { useState } from "react";
import "./sidebar.css";
import { Icone } from "components";
import { Link } from "react-router-dom";

export function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleTrigger = () => setIsOpen(!isOpen);

	return (
		<div className={`remove-user-select sidebar${isOpen ? " sidebar--open" : ""}`}>
			<div className="trigger" onClick={handleTrigger}>
				<Icone iconName={isOpen ? "X" : "List"} className="sidebar-icon" />
			</div>
			<Link to={"/backoffice/utilizadores"} className="sidebar-position">
				<Icone iconName={"PeopleFill"} className="sidebar-icon" />
				<span>Utilizador</span>
			</Link>
			<Link to={"/backoffice/topicos"} className="sidebar-position">
				<Icone iconName={"BookmarksFill"} className="sidebar-icon" />
				<span>Tópicos</span>
			</Link>
			<Link to={"/backoffice/centros"} className="sidebar-position">
				<Icone iconName={"BuildingsFill"} className="sidebar-icon" />
				<span>Centro</span>
			</Link>
			<Link to={"/backoffice/revisoes/conteudo"} className="sidebar-position">
				<Icone iconName={"Search"} className="sidebar-icon" />
				<span>Revisão Conteudo</span>
			</Link>
			<Link to={"/backoffice/revisoes/comentario"} className="sidebar-position">
				<Icone iconName={"ChatFill"} className="sidebar-icon" />
				<span>Revisão Comentario</span>
			</Link>
			<Link to={"/backoffice/denuncias"} className="sidebar-position">
				<Icone iconName={"ExclamationTriangleFill"} className="sidebar-icon" />
				<span>Denuncias</span>
			</Link>
			<Link to={"/backoffice/estatisticas"} className="sidebar-position">
				<Icone iconName={"BarChartFill"} className="sidebar-icon" />
				<span>Estatísticas</span>
			</Link>
		</div>
	);
}
