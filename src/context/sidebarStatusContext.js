import { createContext, useState } from "react";

export const SidebarStatusContext = createContext();

export function SidebarStatusProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	return <SidebarStatusContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarStatusContext.Provider>;
}
