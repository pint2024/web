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
		required: notRequired,
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
		required: notRequired,
	},
};

export const email_validation = {
	validation: {
		required: isRequired,
		pattern: {
			value: /\S+@\S+\.\S+/,
			message: "not valid",
		},
	},
};
