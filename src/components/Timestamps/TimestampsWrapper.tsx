import { useEffect } from "react";
import TalentName from "./TalentName";
import { useSelectedTalent } from "../../context/TalentContext";

interface DynamicDataPropsType {
  [key: string]: object;
}
export default function TimestampsWrapper({ data }: DynamicDataPropsType) {
  const { selectedTalent } = useSelectedTalent();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>
        <TalentName selectedTalent={selectedTalent} />
      </div>
    </>
  );
}
