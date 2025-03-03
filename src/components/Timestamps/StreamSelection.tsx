import React, { useState } from "react";
import { useSelectedTalent } from "../../context/TalentContext";
import { Description, Field, Label, Select } from "@headlessui/react";
import styles from "./Timestamps.module.css";
import clsx from "clsx";
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
      <Field>
        <Label className="text-lg/12 font-medium text-gray-300">
          Select a stream
        </Label>
        <Select
          className={clsx(
            "mt-3 block w-half appearance-none rounded-lg border-none bg-white/5 py-1.5 px-10 text-sm/6 text-white mb-10",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          value={selectedStream}
          onChange={handleSelectStream}
        >
          {" "}
          {Object.keys(filteredData[selectedTalent]).map((url, i) => {
            return (
              <option key={i} value={url}>
                Stream #{i + 1}
              </option>
            );
          })}
        </Select>
      </Field>
    </>
  );
}
