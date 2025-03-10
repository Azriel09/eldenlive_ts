import { useState, useEffect, useRef } from "react";
import { DynamicDataPropsType, FilteredDataType } from "./TimestampsTypes";
import TalentName from "./TalentName";
import { useSelectedTalent } from "../../context/TalentContext";
import VideoPlayer from "./VideoPlayer";
import StreamSelection from "./StreamSelection";
import styles from "./Timestamps.module.css";
import ReactPlayer from "react-player";
import BarGraph from "./BarGraph";

export default function TimestampsWrapper({ data }: DynamicDataPropsType) {
  const playerRef = useRef<ReactPlayer>(null);
  const { selectedTalent } = useSelectedTalent();
  const [selectedStream, setSelectedStream] = useState<string>("");
  const [selectedData, setSelectedData] = useState<FilteredDataType>();

  useEffect(() => {
    const filteredData: FilteredDataType | undefined = data.find(
      (obj): obj is FilteredDataType => selectedTalent in obj
    );
    console.log(filteredData);
    if (filteredData && filteredData[selectedTalent]) {
      Object.keys(filteredData[selectedTalent]).map((d, i) => {
        if (i == 0) {
          setSelectedStream("");
          setSelectedStream(d);
        }
      });
    }
    setSelectedData(filteredData);
  }, [data, selectedTalent]);

  return (
    <div className={styles.timestamps_wrapper}>
      <div className={styles.left_wrapper}>
        <TalentName selectedTalent={selectedTalent} />
        <StreamSelection
          data={data}
          selectedStream={selectedStream}
          setSelectedStream={setSelectedStream}
        />

        <VideoPlayer
          selectedStream={selectedStream}
          playerRef={playerRef}
          data={selectedData}
        />
      </div>
      <div className={styles.right_wrapper}>
        {/* <BarGraph data={data} /> */}
      </div>
    </div>
  );
}
