import Popup from "../components/popup/popup";
import { useEffect, useState } from "react";

export const usePopup = () => {
	const [puIsOpen, setpuIsOpen] = useState(false);
	const [puHeaderTitle, setpuHeaderTitle] = useState("");
	const [puHeaderSubtitle, setpuHeaderSubtitle] = useState("");
	const [puHeaderIcons, setpuHeaderIcons] = useState("");
	const [puBody, setpuBody] = useState("");
	const [puFooter, setpuFooter] = useState("");

	useEffect(() => {
		// Lógica que será executada quando ocorrerem mudanças nos estados especificados
		console.log("Estado atualizado:", {
		  puIsOpen,
		  puHeaderTitle,
		  puHeaderSubtitle,
		  puHeaderIcons,
		  puBody,
		  puFooter,
		});
	  }, [puIsOpen, puHeaderTitle, puHeaderSubtitle, puHeaderIcons, puBody, puFooter]);

	const puOpen = () => {
		setpuIsOpen(true);
	};

	const puClose = () => {
		setpuIsOpen(false);
	};

	const puSet = ({ footer, body, headerTitle, headerSubtitle, headerIcons }) => {
		setpuHeaderTitle(() => headerTitle);
		setpuHeaderSubtitle(() => headerSubtitle);
		setpuHeaderIcons(() => headerIcons);
		setpuBody(() => body);
		setpuFooter(() => footer);
	};

	const puClear = () => {
		setpuHeaderTitle("");
		setpuHeaderSubtitle("");
		setpuHeaderIcons("");
		setpuBody("");
		setpuFooter("");
	};

	const puCreate = (...propriedades) => (
		<section>
			{puIsOpen && (
				<Popup
					headerTitle={puHeaderTitle}
					headerSubtitle={puHeaderSubtitle}
					headerIcons={puHeaderIcons}
					body={puBody}
					footer={puFooter}
					onClose={puClose}
				/>
			)}
		</section>
	);

	return {
		puIsOpen,
		puHeaderTitle,
		puHeaderSubtitle,
		puHeaderIcons,
		puBody,
		puFooter,

		setpuIsOpen,
		setpuHeaderTitle,
		setpuHeaderSubtitle,
		setpuHeaderIcons,
		setpuBody,
		setpuFooter,

		puSet,
		puCreate,
		puOpen,
		puClear,
		puClose,
	};
};
