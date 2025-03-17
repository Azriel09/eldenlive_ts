import { useState } from "react";
import BossSwiper from "./BossSwiper";

export default function BossWrapper() {
  const [selectedBoss, setSelectedBoss] = useState<string>("Wolf of Radagon");
  const [talents, setTalents] = useState<string[]>([]);
  const [deaths, setDeaths] = useState<number[]>();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <BossSwiper setSelectedBoss={setSelectedBoss} />
    </>
  );
}
