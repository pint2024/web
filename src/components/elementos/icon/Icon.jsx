import * as Icons from "react-bootstrap-icons";

export const Icon = ({ iconName = "", size = 1, type = "primary", className = "", ...props}) => {
	let IconVariant = null;
	try {
		IconVariant = Icons[iconName];
	} catch (e) {
		throw new Error(iconName);
	}
	const validSizes = [0, 1, 2, 3, 4];
	const isSizeValid = validSizes.includes(size) ? true : false;

	const validTypes = ["primary", "secondary", "success", "danger", "inverse"];
	const isTypeValid = validTypes.includes(type) ? true : false;

	return (
		<>
			{IconVariant && isTypeValid && isSizeValid ? (
				<IconVariant className={`text-size-${size} text-types-${type} ${className}`} {...props}/>
			) : (
				<h1>Icon invalido</h1>
			)}
		</>
	);
};