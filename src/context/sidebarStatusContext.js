import { createContext, useEffect, useState } from "react";
import { DrawerStateUtils } from "utils/drawerState.utils";

export const SidebarStatusContext = createContext();

export function SidebarStatusProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		DrawerStateUtils.set(isOpen);
	}, [isOpen]);

	return <SidebarStatusContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarStatusContext.Provider>;
}
