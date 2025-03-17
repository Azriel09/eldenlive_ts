import { useState } from "react";
import { DynamicDataPropsType } from "./BossTypes";
import BossSwiper from "./BossSwiper";

export default function BossWrapper({ data }: DynamicDataPropsType) {
  const [selectedBoss, setSelectedBoss] = useState<string>("Wolf of Radagon");
  const [talents, setTalents] = useState<string[]>([]);
  const [deaths, setDeaths] = useState<number[]>();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(data);
  return (
    <>
      <BossSwiper setSelectedBoss={setSelectedBoss} />
    </>
  );
}
