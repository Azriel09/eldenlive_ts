export interface DynamicDataPropsType {
  [key: string]: object[];
}

export interface StreamDataType {
  timestamps: string[];
  enemies: string[];
}

export interface VtuberDataType {
  [streamLink: string]: StreamDataType;
}
export interface FilteredDataType {
  [vtuberName: string]: VtuberDataType;
}
