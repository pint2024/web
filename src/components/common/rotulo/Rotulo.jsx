import { Texto } from "../texto/Texto";
import "./rotulo.css";

export function Rotulo({ info }) {
	return <>{info && <div className="rotulo"><Texto size={0} type="inverse">{info}</Texto></div>}</>;
};
