import LoadingComponent from "../global/Loading";

import TalentName from "./TalentName";
import { useSelectedTalent } from "../../context/TalentContext";
export default function TimestampsWrapper({ data }) {
  const { selectedTalent } = useSelectedTalent();
  
  return (
    <>
      {selectedTalent == "" || undefined ? (
        <LoadingComponent />
      ) : (
        <div>
          <TalentName selectedTalent={selectedTalent} />
        </div>
      )}
    </>
  );
}
