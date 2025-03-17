import { useState, useEffect } from "react";
import { DynamicDataPropsType } from "./BossTypes";
import BossSwiper from "./BossSwiper";

export default function BossWrapper({ data }: DynamicDataPropsType) {
  const [selectedBoss, setSelectedBoss] = useState<string>(
    "Margit - The Fell Omen"
  );
  const [talents, setTalents] = useState<string[]>([]);
  const [deaths, setDeaths] = useState<number[]>();

  useEffect(() => {
    const filteredData = Object.entries(data).reduce(
      (acc, [vtuber, enemies]) => {
        const matchedEnemy = enemies.find(
          (enemy) => enemy[selectedBoss] !== undefined
        );
        if (matchedEnemy) {
          acc[vtuber] = [{ [selectedBoss]: matchedEnemy[selectedBoss] }];
        }
        return acc;
      },
      {} as Record<string, { [key: string]: number }[]>
    );
    console.log(data);
  }, [selectedBoss]);
  return (
    <>
      <BossSwiper setSelectedBoss={setSelectedBoss} />
    </>
  );
}
