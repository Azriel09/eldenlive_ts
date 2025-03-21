export interface BossSwiperTypes {
  setSelectedBoss: React.Dispatch<React.SetStateAction<string>>;
}

export interface DynamicDataPropsType {
  [key: string]: object[];
}

export interface SelectedDataTypes {
  [vtuberName: string]: number;
}
