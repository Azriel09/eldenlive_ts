import { useState, useEffect } from "react";
import TalentName from "./TalentName";
import { useSelectedTalent } from "../../context/TalentContext";
import VideoPlayer from "./VideoPlayer";
import StreamSelection from "./StreamSelection";
import styles from "./Timestamps.module.css";
import TimestampsSlider from "./TimestampsSlider";
import LoadingComponent from "../global/Loading";
interface DynamicDataPropsType {
  [key: string]: object;
}
export default function TimestampsWrapper({ data }: DynamicDataPropsType) {
  const { selectedTalent } = useSelectedTalent();
  const [selectedStream, setSelectedStream] = useState<string>("");
  const [selectedData, setSelectedData] = useState();
  useEffect(() => {
    const filteredData = data.find((obj) => selectedTalent in obj);

    Object.keys(filteredData[selectedTalent]).map((d, i) => {
      if (i == 0) {
        setSelectedStream("");
        setSelectedStream(d);
      }
    });
    setSelectedData(filteredData);
  }, [data, selectedTalent]);
  if (selectedStream == "" || selectedStream == undefined) {
    return <LoadingComponent />;
  }
  return (
    <>
      <div>
        <TalentName selectedTalent={selectedTalent} />
        <StreamSelection
          data={data}
          selectedStream={selectedStream}
          setSelectedStream={setSelectedStream}
        />
        <div className={styles.player_timestamps_container}>
          <VideoPlayer selectedStream={selectedStream} />
          <TimestampsSlider
            data={selectedData}
            selectedStream={selectedStream}
          />
        </div>
      </div>
    </>
  );
}
