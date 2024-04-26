import { Imagem } from "components/elementos/imagem/Imagem";

export const InfoLayout = ({ imagem, header, info }) => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div>
				<Imagem src={imagem} className="card-user-picture" />
			</div>
			<div className="col" style={{ marginLeft: "8px" }}>
				{header ? <div>{header}</div> : null}
				{info ? <div>{info}</div> : null}
			</div>
		</div>
	);
};
