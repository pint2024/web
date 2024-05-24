import { TEXT_SIZES, TEXT_TYPES } from "data/data";

export function Texto({ className = "", style = "", size = 1, type = "primary", children }) {
	const isSizeValid = TEXT_SIZES.includes(size) ? true : false;
	const isTypeValid = TEXT_TYPES.includes(type) ? true : false;

	return (
		<>
			{isSizeValid && isTypeValid ? (
				<p className={`text-size-${size} text-types-${type} remove-margin ${className}`} style={{ ...style }}>
					{children}
				</p>
			) : (
				<h1>Texto invalido</h1>
			)}
		</>
	);
};
