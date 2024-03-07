import "./utilizador-info.css";

export const UtilizadorInfo = ({ imagem, header, info }) => {
	return (
		<div className="d-flex align-items-center gap-2">
			<img src={imagem} alt="" className="card-user-picture" />
			<div>
				<div>{header}</div>
				<div>{info}</div>
			</div>
		</div>
	);
};
