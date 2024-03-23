import "./rotulo.css";

export const Rotulo = ({ info }) => {
	return <>{info && <div className="rotulo">{info}</div>}</>;
};
