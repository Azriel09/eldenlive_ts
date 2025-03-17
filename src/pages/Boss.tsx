import { } from "react";
import BossWrapper from "../components/Boss/BossWrapper";
import LoadingComponent from "../components/global/Loading";
import { FetchBossData } from "../services/DataFetcher";
import SideBarToggleButton from "../components/global/SideBarToggleButton";

export default function Boss() {
  const { isPending, data } = FetchBossData();
  if (isPending) {
    return <LoadingComponent />;
  }
  return (
    <>
      <SideBarToggleButton />
      <BossWrapper data={data} />
    </>
  );
}
