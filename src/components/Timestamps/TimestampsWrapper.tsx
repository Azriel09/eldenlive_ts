import { useSelectedTalent } from "../../context/TalentContext";
import LoadingComponent from "../global/Loading";
export default function TimestampsWrapper() {
  const { selectedTalent } = useSelectedTalent();

  return (
    <>
      <h1>{selectedTalent}</h1>
    </>
  );
}
