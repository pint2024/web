export const name_validation = {
	validation: {
		required: {
			value: true,
			message: "required",
		},
		maxLength: {
			value: 30,
			message: "30 characters max",
		},
	},
};

export const password_validation = {
	validation: {
		required: {
			value: true,
			message: "required",
		},
		minLength: {
			value: 6,
			message: "min 6 characters",
		},
	},
};

export const number_validation = {
	validation: {
		required: {
			value: true,
			message: "required",
		},
	},
};

export const email_validation = {
	validation: {
		required: {
			value: true,
			message: "required",
		},
		pattern: {
			value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: "not valid",
		},
	},
};
