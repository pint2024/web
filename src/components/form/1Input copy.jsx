import {
	CaixaTexto,
	CheckBox,
	ComboBox,
	DatePicker,
	FileBox,
	ImageBox,
	MultiSelectBox,
	TextArea,
	TimePicker,
	SwitchToggle,
	Botao,
} from ".";

export const Input = ({ key, type, label, placeholder }) => {
	const options = { label, placeholder };
	let inputRender = null;
	switch (type) {
		case "date":
			inputRender = <DatePicker {...options} />;
			break;
		case "time":
			inputRender = <TimePicker {...options} />;
			break;
		case "text":
			inputRender = <CaixaTexto {...options} />;
			break;
		case "checkbox":
			inputRender = <CheckBox {...options} />;
			break;
		case "combobox":
			inputRender = <ComboBox {...options} />;
			break;
		case "multiselect":
			inputRender = <MultiSelectBox {...options} />;
			break;
		case "switch":
			inputRender = <SwitchToggle {...options} />;
			break;
		case "file":
			inputRender = <FileBox {...options} />;
			break;
		case "image":
			inputRender = <ImageBox {...options} />;
			break;
		case "textarea":
			inputRender = <TextArea {...options} />;
			break;
		case "button":
			inputRender = <Botao {...options} />;
			break;
		default:
			return null;
	}

	return <div key={key}>{inputRender}</div>;
};
