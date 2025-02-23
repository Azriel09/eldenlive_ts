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
  useEffect(() => {}, [data]);
  return (
    <>
      <div>
        <TalentName selectedTalent={selectedTalent} />
        {selectedStream ? (
          <VideoPlayer selectedStream={selectedStream} />
        ) : (
          <StreamSelection
            data={data}
            selectedStream={selectedStream}
            setSelectedStream={setSelectedStream}
          />
        )}
      </div>
    </>
  );
}
