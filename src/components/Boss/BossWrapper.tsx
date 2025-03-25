import { useState, useEffect } from "react";
import { DynamicDataPropsType, SelectedDataTypes } from "./BossTypes";
import BossSwiper from "./BossSwiper";
import BossBarGraph from "./BossBarGraph";

export default function BossWrapper({ data }: DynamicDataPropsType) {
  const [selectedData, setSelectedData] = useState<SelectedDataTypes>();
  const [selectedBoss, setSelectedBoss] = useState<string>(
    "Margit - The Fell Omen"
  );

  useEffect(() => {
    // Filter data
    // Only selected boss will remain
    const filteredData = Object.entries(data).reduce(
      (acc, [vtuber, enemies]) => {
        const matchedEnemy = enemies.find(
          (enemy) => enemy[selectedBoss] !== undefined
        );

        if (matchedEnemy) {
          acc[vtuber] = Object.values(matchedEnemy)[0] as number;
        }
        return acc;
      },
      {} as SelectedDataTypes
    );

    setSelectedData(filteredData);
  }, [selectedBoss]);
  return (
    <>
      <BossSwiper setSelectedBoss={setSelectedBoss} />
      {selectedData ? <BossBarGraph data={selectedData} /> : null}
    </>
  );
}
