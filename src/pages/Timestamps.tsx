import { useState, useEffect } from "react";
import TimestampsWrapper from "../components/Timestamps/TimestampsWrapper";
import SideBarToggleButton from "../components/global/SideBarToggleButton";
import DataFetch from "../services/DataFetcher";
import LoadingComponent from "../components/global/Loading";
export default function Timestamps() {
  const [talentData, setTalentData] = useState();
  const data = DataFetch();
  useEffect(() => {}, []);
  return (
    <>
      <SideBarToggleButton />
      {!data ? <LoadingComponent /> : <TimestampsWrapper data={data}/>}
    </>
  );
}
