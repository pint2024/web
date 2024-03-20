import "./utilizador-info.css";

export const UtilizadorInfo = ({ imagem, header, info }) => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div>
				<img src={imagem} alt="" className="card-user-picture" />
			</div>
			<div className="col" style={{ marginLeft: "8px" }}>
				<div>{header}</div>
				<div>{info}</div>
			</div>
		</div>
	);
};
