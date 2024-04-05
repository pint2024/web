const isRequired = {
	value: true,
	message: "Obrigatório",
};

const notRequired = {
	value: false,
	message: "Opcional",
};

export const name_validation = {
	validation: {
		required: isRequired,
		maxLength: {
			value: 30,
			message: "30 characters max",
		},
	},
};

export const password_validation = {
	validation: {
		required: isRequired,
		minLength: {
			value: 6,
			message: "min 6 characters",
		},
	},
};

export const combobox_validation = {
	validation: {
		required: notRequired,
	},
};

export const number_validation = {
	validation: {
		required: notRequired
	},
};

export const email_validation = {
	validation: {
		required: isRequired,
		pattern: {
			value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: "not valid",
		},
	},
};
