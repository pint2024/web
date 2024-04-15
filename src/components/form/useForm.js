import { useState, useEffect } from "react";
import { CompareRegex, isEmpty } from "utils/utils";

export const useForm = (callback, input_fields) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validateFields(values, input_fields));
		setIsSubmitting(true);
	};

	const handleChange = (event) => {
		event.persist();
		setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
	};

	const validateFields = (fields, input_fields) => {
		let errors = {};
		Object.keys(fields).forEach((fieldName) => {
			const fieldValue = fields[fieldName];
			const fieldValidation = input_fields.find((field) => field.name === fieldName)?.validation;
			if (fieldValidation) {
				if (fieldValidation?.required?.value && isEmpty(fieldValue)) {
					errors[fieldName] = `Obrigatório`;
				}
				if (fieldValidation?.minLength?.value && fieldValue.length < fieldValidation.minLength.value) {
					errors[fieldName] = `> ${fieldValidation.minLength.value} caracteres`;
				}
				if (fieldValidation?.maxLength?.value && fieldValue.length > fieldValidation.maxLength.value) {
					errors[fieldName] = `< ${fieldValidation.maxLength.value} caracteres`;
				}
				if (fieldValidation?.pattern?.value && !CompareRegex(fieldValidation?.pattern, fieldValue)) {
					errors[fieldName] = `Inválido`;
				}
			}
		});
		return errors;
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};
