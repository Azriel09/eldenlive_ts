import { useState, useEffect } from "react";
import { useSelectedTalent } from "../../context/TalentContext";
import LoadingComponent from "../global/Loading";
import { useNavigate } from "react-router-dom";
import TalentName from "./TalentName";

export default function TimestampsWrapper({data}) {
  const { selectedTalent } = useSelectedTalent();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!selectedTalent) {
      navigate("/");
    }
  }, [selectedTalent]);
  return (
    <>
      {selectedTalent == "" ? (
        <LoadingComponent />
      ) : (
        <div>
          <TalentName selectedTalent={selectedTalent} />
        </div>
      )}
    </>
  );
}
