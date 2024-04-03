import "./loading.css";
import { LoadingAnimation } from "./LoadingAnimation";

export const Loading = () => {
	return (
		<div className="loading-operation">
			<LoadingAnimation />
		</div>
	);
};
