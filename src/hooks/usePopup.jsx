import Popup from "src/components/Popup/popup";
import { useState } from "react";

export const usePopup = () => {
	const [puIsOpen, setpuIsOpen] = useState(false);
	const [puTitulo, setpuTitulo] = useState("");
	const [puSubtitulo, setpuSubtitulo] = useState("");
	const [puIcons, setpuIcons] = useState("");
	const [puBody, setpuBody] = useState("");
	const [puFooter, setpuFooter] = useState("");

	const puOpen = () => {
		setpuIsOpen(true);
	};

	const puClose = () => {
		setpuIsOpen(false);
	};

	const puDefine = (titulo, subtitulo, icons, body, footer) => {
		setpuTitulo(titulo);
		setpuSubtitulo(subtitulo);
		setpuIcons(icons);
		setpuBody(body);
		setpuFooter(footer);
	}

	const puClear = () => {
		setpuTitulo("");
		setpuSubtitulo("");
		setpuIcons("");
		setpuBody("");
		setpuFooter("");
	};

	const puCreate = () => (
		<div>
			{puIsOpen && (
				<Popup
					titulo={puTitulo}
					subtitulo={puSubtitulo}
					childrenHeaderIcons={puIcons}
					childrenBody={puBody}
					childrenFooter={puFooter}
					onClose={puClose}
				/>
			)}
		</div>
	);

	return {
		puIsOpen,
		puTitulo,
		puSubtitulo,
		puIcons,
		puBody,
		puFooter,

		setpuIsOpen,
		setpuTitulo,
		setpuSubtitulo,
		setpuIcons,
		setpuBody,
		setpuFooter,

		puDefine,
		puCreate,
		puOpen,
		puClear,
		puClose,
	};
};
