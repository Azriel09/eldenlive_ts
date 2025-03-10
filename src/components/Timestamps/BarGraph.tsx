import { useEffect, useState } from "react";
import { BarGraphProps } from "./TimestampsTypes";
import { useSelectedTalent } from "../../context/TalentContext";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  width: 400,
  height: 400,
  color: "white",
};
export default function BarGraph({ data, selectedStream }: BarGraphProps) {
  const { selectedTalent } = useSelectedTalent();
  const [barData, setBarData] = useState<object[]>([]);

  useEffect(() => {
    if (data) {
      const temp_e: string[] = data[selectedTalent][selectedStream]["enemies"];
      const enemy_frequency = Object.values(
        temp_e.reduce((acc, enemy_name) => {
          acc[enemy_name] = acc[enemy_name] || { enemy_name, value: 0 };
          acc[enemy_name].value += 1;
          return acc;
        }, {} as Record<string, { enemy_name: string; value: number }>)
      );
      console.log(enemy_frequency);
      setBarData(enemy_frequency);
    }
  }, [selectedStream]);
  return (
    <BarChart
      dataset={barData}
      yAxis={[{ scaleType: "band", dataKey: "enemy_name" }]}
      series={[{ dataKey: "value", label: "Deaths" }]}
      layout="horizontal"
      barLabel={(v) => {
        return barData[v.dataIndex]["enemy_name"];
      }}
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
