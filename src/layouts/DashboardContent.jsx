import { Outlet } from "react-router-dom";
import { DashboardHeader } from "./dashboardHeader/DashboardHeader";

export const DashboardContent = () => {
	return (
		<section id="DashboardContent">
			<DashboardHeader />
			<Outlet />
		</section>
	);
};
