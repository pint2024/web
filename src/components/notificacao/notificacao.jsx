import "./notificacao.css";
import { toast } from "react-toastify";


export function Notificacao(text, tipo = "success") {
	if (tipo.includes(['success', 'info', 'warn', 'error']))
		console.error('PopupStatus tipo está mal configurado!');
	toast[tipo](text, {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
}
