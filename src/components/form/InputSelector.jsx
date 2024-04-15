import React from "react";
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

export const InputSelector = React.forwardRef(({ input, ...props }, ref) => {
	let inputRender = null;
	switch (input) {
		case "date":
			inputRender = <DatePicker {...props} ref={ref} />;
			break;
		case "time":
			inputRender = <TimePicker {...props} ref={ref} />;
			break;
		case "text":
			inputRender = <CaixaTexto {...props} ref={ref} />;
			break;
		case "checkbox":
			inputRender = <CheckBox {...props} ref={ref} />;
			break;
		case "combobox":
			inputRender = <ComboBox {...props} ref={ref} />;
			break;
		case "multiselect":
			inputRender = <MultiSelectBox {...props} ref={ref} />;
			break;
		case "switch":
			inputRender = <SwitchToggle {...props} ref={ref} />;
			break;
		case "file":
			inputRender = <FileBox {...props} ref={ref} />;
			break;
		case "image":
			inputRender = <ImageBox {...props} ref={ref} />;
			break;
		case "textarea":
			inputRender = <TextArea {...props} ref={ref} />;
			break;
		case "button":
			inputRender = <Botao {...props} ref={ref} />;
			break;
		default:
			return <Texto type="danger">Não existe esse Input!</Texto>;
	}

	return <>{inputRender}</>;
});
