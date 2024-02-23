import "./toast.css";
import { toast } from "react-toastify";


export function Toast(text, tipo = "success") {
	if (tipo !== 'success' && tipo !== 'info' && tipo !== 'warn' && tipo !== 'error')
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
