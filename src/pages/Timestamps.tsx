import { useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import { DataFetch } from "../services/DataFetcher";
import LoadingComponent from "../components/global/Loading";
import { useSelectedTalent } from "../context/TalentContext";
import { useLocation } from "react-router-dom";

export default function Timestamps() {
  const { selectedTalent, setSelectedTalent } = useSelectedTalent();
  const { isPending, data } = DataFetch();
  const location: string = useLocation().pathname;

  useEffect(() => {
    // Get the url location and set it as the selected talent
    setSelectedTalent(location.split("/").pop()?.replace("_", " ") || "");
  }, [setSelectedTalent, location]);
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
