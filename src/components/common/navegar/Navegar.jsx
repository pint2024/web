import { Link } from "react-router-dom";

export function Navegar({className, children, ...props}) {
	return (
		<>
			<Link className={`text-types-link ${className}`} {...props}>
				{children}
			</Link>
		</>
	);
};