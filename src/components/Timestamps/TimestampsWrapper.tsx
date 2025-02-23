import { useState, useEffect } from "react";
import TalentName from "./TalentName";
import { useSelectedTalent } from "../../context/TalentContext";
import VideoPlayer from "./VideoPlayer";
import StreamSelection from "./StreamSelection";

interface DynamicDataPropsType {
  [key: string]: object;
}
export default function TimestampsWrapper({ data }: DynamicDataPropsType) {
  const { selectedTalent } = useSelectedTalent();
  const [selectedStream, setSelectedStream] = useState<string>("");
  useEffect(() => {
    const filteredData = data.find((obj) => selectedTalent in obj);
    Object.keys(filteredData[selectedTalent]).map((d, i) => {
      if (i == 0) {
        setSelectedStream(d);
      }
    });
  }, [data, selectedTalent]);
  return (
    <>
      <div>
        <TalentName selectedTalent={selectedTalent} />
        <StreamSelection
          data={data}
          selectedStream={selectedStream}
          setSelectedStream={setSelectedStream}
        />
        <VideoPlayer selectedStream={selectedStream} />
      </div>
    </>
  );
}
