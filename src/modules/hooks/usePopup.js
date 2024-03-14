import Popup from "components/popup/popup";
import { useEffect, useState } from "react";

export const usePopup = () => {
	const [puIsOpen, setpuIsOpen] = useState(false);
	const [puHeaderTitle, setpuHeaderTitle] = useState("");
	const [puHeaderInfo, setpuHeaderInfo] = useState("");
	const [puHeaderIcons, setpuHeaderIcons] = useState("");
	const [puBody, setpuBody] = useState("");
	const [puFooter, setpuFooter] = useState("");

	const puOpen = () => {
		setpuIsOpen(true);
	};

	const puClose = () => {
		setpuIsOpen(false);
	};

	const puSet = ({ footer, body, headerTitle, headerInfo, headerIcons }) => {
		setpuHeaderInfo(() => headerInfo);
		setpuHeaderTitle(() => headerTitle);
		setpuHeaderIcons(() => headerIcons);
		setpuBody(() => body);
		setpuFooter(() => footer);
	};

	const puClear = () => {
		setpuHeaderInfo("");
		setpuHeaderTitle("");
		setpuHeaderIcons("");
		setpuBody("");
		setpuFooter("");
	};

	const puCreate = (...propriedades) => (
		<section>
			{puIsOpen && (
				<Popup
					headerInfo={puHeaderInfo}
					headerTitle={puHeaderTitle}
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
		puHeaderInfo,
		puHeaderIcons,
		puBody,
		puFooter,

		setpuIsOpen,
		setpuHeaderTitle,
		setpuHeaderInfo,
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
