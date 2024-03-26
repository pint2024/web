import * as Icons from "react-bootstrap-icons";

export const Icon = ({ iconName = "", size = 1, type = "primary", className = "", ...props}) => {
	const IconVariant = Icons[iconName];

	const validSizes = [0, 1, 2, 3, 4];
	const isSizeValid = validSizes.includes(size) ? true : false;

	const validTypes = ["primary", "secondary", "success", "danger", "inverse"];
	const isTypeValid = validTypes.includes(type) ? true : false;

	return (
		<>
			{isTypeValid && isSizeValid ? (
				<IconVariant className={`text-size-${size} text-types-${type} ${className}`} {...props}/>
			) : (
				<h1>Icon invalido</h1>
			)}
		</>
	);
};
