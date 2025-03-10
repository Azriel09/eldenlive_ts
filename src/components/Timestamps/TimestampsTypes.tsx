import ReactPlayer from "react-player";

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

export interface StreamSelectionPropTypes {
  data: object[];
  selectedStream: string;
  setSelectedStream: React.Dispatch<React.SetStateAction<string>>;
}

export interface VideoPlayerProps {
  selectedStream: string;
  playerRef: React.RefObject<ReactPlayer>;
  data: FilteredDataType | undefined;
}

export interface TimestampsSliderProps {
  data: FilteredDataType | undefined;
  selectedStream: string;
  playerRef: React.RefObject<ReactPlayer>;
}
export interface SliderData {
  value: number;
}


export interface BarGraphProps {
  data: FilteredDataType | undefined;
  selectedStream: string;
}