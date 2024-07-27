import { SidebarStatusContext } from "context/sidebarStatusContext";
import { useContext } from "react";

export function useSidebarStatus() {
	return useContext(SidebarStatusContext);
}
