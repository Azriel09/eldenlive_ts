import { createContext, useState, useContext, ReactNode } from "react";

type SelectedTalentContextType = {
  selectedTalent: string;
  setSelectedTalent: (talent: string) => void;
};
interface SelectedTalentProviderProps {
  children: ReactNode;
}
const SelectedTalentContext = createContext<
  SelectedTalentContextType | undefined
>(undefined);

export const SelectedTalentProvider = ({
  children,
}: SelectedTalentProviderProps) => {
  const [selectedTalent, setSelectedTalent] = useState<string>("");
  return (
    <SelectedTalentContext.Provider
      value={{ selectedTalent, setSelectedTalent }}
    >
      {children}
    </SelectedTalentContext.Provider>
  );
};

export const useSelectedTalent = () => {
  const context = useContext(SelectedTalentContext);
  if (!context) {
    throw new Error(
      "useSelectedTalentContext must be used within a SelectedTalentProvider"
    );
  }
  return context
};

