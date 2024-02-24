import "./styles.css";

const Text = ({className = '', style = '', size = 1, type = "primary", children}) => {
	const validSizes = [0, 1, 2, 3, 4];
	const isSizeValid = validSizes.includes(size) ? true : false;

	const validTypes = ['primary', 'secondary', 'success', 'danger', 'inverse'];
	const isTypeValid = validTypes.includes(type) ? true : false;

	return (
		<>
			{isSizeValid && isTypeValid
				? ( <p className={`text-size-${size} text-types-${type} text-comp ${className}`} style={{style}}>{children}</p> )
				: ( <h1>Texto invalido</h1> )
			}
		</>
	);
};

export default Text;