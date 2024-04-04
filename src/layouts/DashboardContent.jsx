import { DashboardHeader } from "./dashboardHeader/DashboardHeader";

export const DashboardContent = ({ children }) => {
	return (
		<section id="DashboardContent">
			<DashboardHeader />
			{children}
		</section>
	);
};
