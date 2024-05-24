import { Confirmacao } from "components/index";
import { useState } from "react";

export const useConfirmation = () => {
	const [conIsOpen, setconIsOpen] = useState(false);
	const [conTitle, setconTitle] = useState("");
	const [conBody, setconBody] = useState("");
	const [conSuccess, setconSuccess] = useState(null);

	const conOpen = () => {
		setconIsOpen(true);
	};

	const conClose = () => {
		setconIsOpen(false);
	};

	const conSet = ({title, body, onSuccess}) => {
		setconTitle(title);
		setconBody(body);
		setconSuccess(onSuccess);
	}

	const conClear = () => {
		setconTitle("");
		setconBody("");
		setconSuccess(null);
	};

	const conCreate = () => (
		<>
			{conIsOpen && (
				<Confirmacao
					title={conTitle}
					body={conBody}
					onSuccess={conSuccess}
					onClose={conClose}
				/>
			)}
		</>
	);

	return {
		conIsOpen,
		conTitle,
		conBody,
		conSuccess,

		setconIsOpen,
		setconTitle,
		setconBody,
		setconSuccess,

		conSet,
		conCreate,
		conOpen,
		conClear,
		conClose,
	};
};
