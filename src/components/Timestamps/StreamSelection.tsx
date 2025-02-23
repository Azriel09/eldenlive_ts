import { useSelectedTalent } from "../../context/TalentContext";
import styles from "./Timestamps.module.css";
import React from "react";
interface StreamSelectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  selectedStream: string;
  setSelectedStream: React.Dispatch<React.SetStateAction<string>>;
}

export default function StreamSelection({
  data,
  selectedStream,
  setSelectedStream,
}: StreamSelectionProps) {
  const { selectedTalent } = useSelectedTalent();
  const filteredData = data.find((obj) => selectedTalent in obj);
  const handleSelectStream = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStream(e.target.value as string);
  };
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="streams" className={styles.label}>
          Select Stream
        </label>
        <select
          className={styles.select}
          name="streams"
          id="streams"
          value={selectedStream}
          onChange={handleSelectStream}
        >
          {Object.keys(filteredData[selectedTalent]).map((url, i) => {
            
            return (
              <option key={i} value={url} className={styles.option}>
                Stream #{i + 1}
              </option>
            );
          })}
        </select>
      </form>
    </>
  );
}
