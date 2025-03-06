import { useState, useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import { DataFetch } from "../services/DataFetcher";
import LoadingComponent from "../components/global/Loading";
import { useSelectedTalent } from "../context/TalentContext";

import { useNavigate, useLocation } from "react-router-dom";

export default function Timestamps() {
  const { selectedTalent, setSelectedTalent } = useSelectedTalent();
  const [loading, setLoading] = useState<boolean>(true);
  const { isPending, data } = DataFetch();
  const location: string | undefined = useLocation().pathname;

  useEffect(() => {
    setSelectedTalent(location.split("/").pop()?.replace("_", " "));
  }, []);
  if (isPending || selectedTalent == "") {
    return <LoadingComponent />;
  }

  return (
    <>
      <SideBarToggleButton />
      <TimestampsWrapper data={data} />
    </>
  );
}
