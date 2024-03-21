import "./utilizador-info.css";

export const UtilizadorInfo = ({ imagem, header, info }) => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div>
				<img src={imagem} alt="" className="card-user-picture" />
			</div>
			<div className="col" style={{ marginLeft: "8px" }}>
				{header ? <div>{header}</div> : null}
				{info ? <div>{info}</div> : null}
			</div>
		</div>
	);
};
