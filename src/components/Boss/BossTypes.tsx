export interface BossSwiperTypes {
  setSelectedBoss: React.Dispatch<React.SetStateAction<string>>;
}

export interface DynamicDataPropsType {
  [key: string]: object[];
}

export interface filteredDataTypes {
  [key: string]: number;
}

export interface SelectedDataTypes {
  [key: string]: filteredDataTypes;
}
