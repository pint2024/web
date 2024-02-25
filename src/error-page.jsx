import { useRouteError } from "react-router-dom";
import Texto from "./components/texto/texto";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<Texto size={3}>Oops!</Texto>
			<Texto>Sorry, an unexpected error has occurred.</Texto>
			<Texto>
				<i>{error.statusText || error.message}</i>
			</Texto>
		</div>
	);
}
