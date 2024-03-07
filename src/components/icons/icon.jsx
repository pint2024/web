import * as Icons from "react-bootstrap-icons";

const Icon = ({ iconName, className = "", style = "", size = 1, type = "primary" }) => {
	const IconVariant = Icons[iconName];

	const validSizes = [0, 1, 2, 3, 4];
	const isSizeValid = validSizes.includes(size) ? true : false;

	const validTypes = ["primary", "secondary", "success", "danger", "inverse"];
	const isTypeValid = validTypes.includes(type) ? true : false;

	return (
		<>
			{isTypeValid && isSizeValid ? (
				<IconVariant className={`text-size-${size} text-types-${type} ${className}`} style={{ ...style }} />
			) : (
				<h1>Icon invalido</h1>
			)}
		</>
	);
};

export default Icon;
