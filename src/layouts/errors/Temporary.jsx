import { Texto } from "components";
import { useLocation } from "react-router-dom";

export function Temporary({ children }) {
	const location = useLocation();
	console.log(location);
	return (
		<>
			<Texto size={5}>A ser implementado!</Texto>
			<Texto>{location.pathname}</Texto>
			{children}
		</>
	);
}
