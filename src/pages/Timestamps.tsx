import { useState, useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import { DataFetch } from "../services/DataFetcher";
import LoadingComponent from "../components/global/Loading";
import { useSelectedTalent } from "../context/TalentContext";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
const queryClient = new QueryClient();
export default function Timestamps() {
  const { selectedTalent } = useSelectedTalent();
  const [loading, setLoading] = useState<boolean>(true);

  const { isPending, data } = DataFetch();
  if (isPending) {
    return <LoadingComponent />;
  }
  console.log(selectedTalent);
  return (
    <>
      <SideBarToggleButton />
      {/* <TimestampsWrapper data={data} /> */}
    </>
  );
}
