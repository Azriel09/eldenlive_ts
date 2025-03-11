import { useEffect, useState } from "react";
import { BarGraphProps } from "./TimestampsTypes";
import { useSelectedTalent } from "../../context/TalentContext";
import ReactApexChart from "react-apexcharts";
import { useLocation } from "react-router-dom";
import { colors } from "@mui/material";
export default function BarGraph({ data, selectedStream }: BarGraphProps) {
  const { selectedTalent } = useSelectedTalent();
  const [barData, setBarData] = useState<object[]>([]);
  const route: string = useLocation().pathname;
  const location: string = route.split("/").pop()?.replace("_", " ") || "";
  useEffect(() => {
    if (data) {
      const temp_e: string[] = data[selectedTalent][selectedStream]["enemies"];
      const enemy_frequency = Object.entries(
        temp_e.reduce((acc, name) => {
          acc[name] = (acc[name] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      ).map(([key, value]) => ({ [key]: value }));

      setBarData(enemy_frequency);
      console.log(location);
    }
  }, [selectedStream]);

  function chartColor() {
    switch (location) {
      case "Amelia_Watson":
        return "#ffff00";
      case "Mori Calliope":
        return "#ff0000";
      case "Gawr_Gura":
        return "#008ffb";
      case "Ninomae Ina'nis":
        return "#9400d3";
      case "IRyS":
        return "#ff00ff";
      case "Ouro Kronii":
        return "#0000ff";
      default:
        return "ONE";
    }
  }
  const barSeries = [
    {
      data: barData.map((obj) => Object.values(obj)[0]),
    },
  ];
  const barOptions = {
    chart: {
      height: 450,
      width: 700,
      foreColor: "#c9cdd4",
      fontFamily: "Elden Ring",
      stroke: "#c9cdd4",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        height: "100%",
        dataLabels: {
          position: "bottom",
        },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: [`#FFF`],
        textAlign: "center",
        fontSize: "1.25em",
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
    },
    xaxis: {
      categories: barData.map((obj) => Object.keys(obj)[0]),
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };
  return (
    <>
      {" "}
      <ReactApexChart
        options={barOptions}
        series={barSeries}
        type="bar"
        width="175%"
        height="600px"
        style={{}}
      />
    </>
  );
}
