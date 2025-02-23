import { useSelectedTalent } from "../../context/TalentContext";

import React from "react";
interface StreamSelectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  selectedStream: string;
  setSelectedStream: React.Dispatch<React.SetStateAction<string>>;
}

interface OnChangeProps {
  event: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function StreamSelection({
  data,
  selectedStream,
  setSelectedStream,
}: StreamSelectionProps) {
  const { selectedTalent } = useSelectedTalent();
  const filteredData = data.find((obj) => selectedTalent in obj);
  const handleSelectStream = (event: OnChangeProps) => {
    console.log(event.target.value);
    setSelectedStream(event.target.value as string);
  };
  return (
    <>
      <form>
        <label htmlFor="streams">Select Stream</label>
        <select
          name="streams"
          id="streams"
          value={selectedStream}
          onChange={handleSelectStream}
        >
          {Object.keys(filteredData[selectedTalent]).map((url, i) => {
            return (
              <option key={i} value={url}>
                {i + 1}
              </option>
            );
          })}
        </select>
      </form>
    </>
  );
}
