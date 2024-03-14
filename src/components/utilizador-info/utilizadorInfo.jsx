import "./utilizador-info.css";

export const UtilizadorInfo = ({ imagem, header, info }) => {
	return (
		<div className="row align-items-center gap-2">
			<div className="col-2">
				<img src={imagem} alt="" className="card-user-picture" />
			</div>
			<div className="col">
				<div>{header}</div>
				<div>{info}</div>
			</div>
		</div>
	);
};
