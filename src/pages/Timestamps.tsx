import { useState, useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import { useSelectedTalent } from "../context/TalentContext";
import LoadingComponent from "../components/global/Loading";
export default function Timestamps() {
  const { selectedTalent } = useSelectedTalent();

  useEffect(() => {}, [selectedTalent]);
  return (
    <>
      <SideBarToggleButton />
      {selectedTalent == "" ? <LoadingComponent /> : <TimestampsWrapper />}
    </>
  );
}
