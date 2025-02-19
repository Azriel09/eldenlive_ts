import { createContext, useState, useContext, ReactNode } from "react";

type SideBarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

interface SideBarProviderProps {
  children: ReactNode;
}
const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const SideBarProvider = ({ children }: SideBarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SideBarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
