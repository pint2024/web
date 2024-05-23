import "./loading.css";
import { LoadingAnimation } from "./LoadingAnimation";

export function Loading() {
	return (
		<div className="loading-operation">
			<LoadingAnimation />
		</div>
	);
};
