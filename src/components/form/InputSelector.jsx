import { INPUT_TYPES } from "data/constants";
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
import { Texto } from "components/elementos";

export const InputSelector = ({ input, ...props }) => {
	console.log("ola", props);
	let inputRender = null;
	switch (input) {
		case "date":
			inputRender = <DatePicker {...props} />;
			break;
		case "time":
			inputRender = <TimePicker {...props} />;
			break;
		case "text":
			inputRender = <CaixaTexto {...props} />;
			break;
		case "checkbox":
			inputRender = <CheckBox {...props} />;
			break;
		case "combobox":
			inputRender = <ComboBox {...props} />;
			break;
		case "multiselect":
			inputRender = <MultiSelectBox {...props} />;
			break;
		case "switch":
			inputRender = <SwitchToggle {...props} />;
			break;
		case "file":
			inputRender = <FileBox {...props} />;
			break;
		case "image":
			inputRender = <ImageBox {...props} />;
			break;
		case "textarea":
			inputRender = <TextArea {...props} />;
			break;
		case "button":
			inputRender = <Botao {...props} />;
			break;
		default:
			return <Texto type="danger">Não existe esse Input!</Texto>;
	}

	return <>{inputRender}</>;
};
