import { useState, useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import DataFetch from "../services/DataFetcher";
import LoadingComponent from "../components/global/Loading";
import { useSelectedTalent } from "../context/TalentContext";
import { useNavigate } from "react-router-dom";

export default function Timestamps() {
  const { selectedTalent } = useSelectedTalent();
  const navigate = useNavigate();
  const [talentData, setTalentData] = useState<any>(null);
  const result = DataFetch();

  useEffect(() => {
    if (!selectedTalent) {
      navigate("/");
    }
    setTalentData(result);
  }, [selectedTalent, result]);
  return (
    <>
      <SideBarToggleButton />
      {talentData == null ? (
        <LoadingComponent />
      ) : (
        <TimestampsWrapper data={talentData} />
      )}
    </>
  );
}
