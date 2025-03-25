import { useState, useEffect } from "react";
import { SelectedDataTypes } from "./BossTypes";

import "./Boss.styles.css";
import ReactApexChart from "react-apexcharts";
export default function BossBarGraph({ data }: { data?: SelectedDataTypes }) {
  const [holoMem, setHoloMems] = useState<string[]>([]);
  const [deathCounts, setDeathCounts] = useState<string[]>([]);
  const [genCategories, setGenCategories] = useState<string[]>([]);
  useEffect(() => {
    if (data) {
      const tempArr: string[] = [];
      const tempD: string[] = [];
      Object.keys(data).map((talent) => {
        tempArr.push(talent);
        tempD.push(`${data[talent]}`);
      });

      // Setting Gen categories
      const tempGen: string[] = [];
      tempArr.map((talent) => {
        switch (talent) {
          case "Ouro Kronii":
          case "IryS":
            if (!tempGen.includes("Promise")) {
              tempGen.push("Promise");
            }

            return;
          case "Koseki Bijou":
            if (!tempGen.push("Advent")) {
              tempGen.push("Advent");
            }
            return;
          case "Gawr Gura":
          case "Amelia Watson":
          case "Ninomae Ina'nis":
          case "Mori Calliope":
            if (!tempGen.push("Myth")) {
              tempGen.push("Myth");
            }
            return;
        }
      });
      console.log(tempGen);
      setGenCategories(tempGen);
      setHoloMems(tempArr);
      setDeathCounts(tempD);
    }
  }, [data]);

  const barDataSortByGen = (name, index) => {
    if (holoMem.includes("IRyS") || holoMem.includes("Ouro Kronii")) {
      switch (name) {
        case "Gawr Gura":
        case "Amelia Watson":
          return [deathCounts[index], 0];
        case "Ninomae Ina'nis":
        case "Mori Calliope":
          return [deathCounts[index], 0];
        case "IRyS":
        case "Ouro Kronii":
          return [0, deathCounts[index]];
      }
    } else {
      switch (name) {
        case "Gawr Gura":
        case "Amelia Watson":
        case "Ninomae Ina'nis":
        case "Mori Calliope":
          return [deathCounts[index]];
      }
    }
  };
  const barSeries = holoMem.map((name, index) => {
    const d = {
      name: name,
      data: barDataSortByGen(name, index),
    };
    console.log(d);
    return d;
  });
  const barOptions = {
    chart: {
      type: "bar",
      height: 200,
      stacked: true,
      fontSize: "25px",
      foreColor: "white",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "50px",
              fontWeight: 900,
              color: "white",
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "Deaths Distribution by Generation",
    },
    xaxis: {
      categories: genCategories,
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
      style: {
        fontSize: "12px",
        color: "black",
        foreColor: "#000",
      },
    },
    fill: {
      opacity: 0.5,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: 40,
    },
    dataLabels: {
      enabledOnSeries: true,
      offset: -5,
      style: {
        fontSize: "20px",
        foreColor: "gray",
        color: "black",
        backgroundColor: "#000",
      },
    },
  };
  return (
    <>
      {holoMem ? (
        <ReactApexChart
          options={barOptions}
          series={barSeries}
          type="bar"
          width="90%"
          height="400px"
        />
      ) : null}
    </>
  );
}
