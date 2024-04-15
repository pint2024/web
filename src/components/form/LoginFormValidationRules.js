export default function validate(values) {
	let errors = {};
	if (!values.email) {
		errors.email = "Email address ias required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address ias invalid";
	}
	/*if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 8) {
		errors.password = "Password must be 8 or more characters";
	}*/
	return errors;
}
