import "./rotulo.css";

export function Rotulo({ info }) {
	return <>{info && <div className="rotulo">{info}</div>}</>;
};
