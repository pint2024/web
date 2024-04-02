export const Form = ({ name, action, target, method, autocomplete, novalidate, children}) => {
	const options = { name, action, target, method, autocomplete, novalidate};
	return (
		<form {...options}>
			{children}
		</form>
	);
};