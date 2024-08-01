import App from "App";
import { ToastContainer } from "react-toastify";
import { LoadingProvider } from "context/loadingContext";
import { AutenticacaoProvider } from "hooks/useAutenticacao";
import { DrawerStatusProvider } from "context/drawerStatusContext";

export function AppWrapper() {
	return (
		<>
			<AutenticacaoProvider>
				<LoadingProvider>
					<DrawerStatusProvider>
						<ToastContainer />
						<App />
					</DrawerStatusProvider>
				</LoadingProvider>
			</AutenticacaoProvider>
		</>
	);
}
