import React from "react";
import { useSelectedTalent } from "../../context/TalentContext";
import { Field, Label, Select } from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import { FilteredDataType, StreamSelectionPropTypes } from "./TimestampsTypes";

export default function StreamSelection({
  data,
  selectedStream,
  setSelectedStream,
}: StreamSelectionPropTypes) {
  const { selectedTalent } = useSelectedTalent();
  console.log(data);
  const filteredData: FilteredDataType | undefined = data.find(
    (obj): obj is FilteredDataType => selectedTalent in obj
  );

  const handleSelectStream = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStream(e.target.value as string);
  };
  return (
    <>
      <Field>
        <Label className="text-lg/12 font-medium text-gray-300">
          Select a stream
        </Label>
        <div className="relative w-40">
          <Select
            className={clsx(
              "mt-3 block w-half appearance-none rounded-lg border-none bg-white/5 py-1.5 px-10 text-sm/6 text-white mb-10",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            value={selectedStream}
            onChange={handleSelectStream}
          >
            {filteredData?.[selectedTalent] &&
              Object.keys(filteredData[selectedTalent]).map((url, i) => (
                <option key={i} value={url}>
                  Stream #{i + 1}
                </option>
              ))}
          </Select>
          <ExpandMoreIcon className="group pointer-events-none absolute top-1.75 right-4 size-4 fill-white/60" />
        </div>
      </Field>
    </>
  );
}
