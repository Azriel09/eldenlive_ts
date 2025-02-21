import { useState, useEffect } from "react";
import { useSelectedTalent } from "../../context/TalentContext";
import LoadingComponent from "../global/Loading";
import { useNavigate } from "react-router-dom";
export default function TimestampsWrapper() {
  const { selectedTalent } = useSelectedTalent();
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectedTalent) {
      navigate("/");
    }
  }, [selectedTalent]);
  return (
    <>
      {selectedTalent == "" ? <LoadingComponent /> : <h1>{selectedTalent}</h1>}
    </>
  );
}
