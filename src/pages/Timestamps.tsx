import { useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import { useSelectedTalent } from "../context/TalentContext";
import LoadingComponent from "../components/global/Loading";
import { useNavigate } from "react-router-dom";
export default function Timestamps() {
  const { selectedTalent } = useSelectedTalent();
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectedTalent) {
      navigate("/");
    }
  }, [selectedTalent]);
  return (
    <>
      <SideBarToggleButton />
      {selectedTalent == "" ? <LoadingComponent /> : <TimestampsWrapper />}
    </>
  );
}
