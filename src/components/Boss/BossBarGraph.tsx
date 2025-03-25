import { useState, useEffect } from "react";
import { SelectedDataTypes, GenerationTypes } from "./BossTypes";
import "./Boss.styles.css";
import ReactApexChart from "react-apexcharts";
export default function BossBarGraph({ data }: { data?: SelectedDataTypes }) {
  const [holoMem, setHoloMems] = useState<string[]>([]);
  const [deathCounts, setDeathCounts] = useState<string[]>([]);
  const [genCategories, setGenCategories] = useState<string[]>([]);
  const generations: GenerationTypes[] = [
    {
      Myth: ["Amelia Watson", "Gawr Gura", "Ninomae Ina'nis", "Mori Calliope"],
    },
    { Promise: ["Ouro Kronii", "IRyS"] },
    { Advent: ["Koseki Bijou"] },
  ];


  useEffect(() => {
    if (data) {
      const tempArr: string[] = [];
      const tempD: string[] = [];
      Object.keys(data).map((talent) => {
        tempArr.push(talent);
        tempD.push(`${data[talent]}`);
      });

      // Filter Gens
      const filteredGenerations = generations
        .filter((genObj) => {
          const genName = Object.keys(genObj)[0];
          const talents = genObj[genName];
          return talents.some((talent) => tempArr.includes(talent));
        })
        .map((genObj) => Object.keys(genObj)[0]);

      setGenCategories(filteredGenerations);
      setHoloMems(tempArr);
      setDeathCounts(tempD);
    }
  }, [data]);

  // The Stacked bar chart works by having data for each category (see https://apexcharts.com/wp-content/uploads/2018/05/stacked-100-bar-chart.svg), but in this case, there's no same talent for each gen, so this is the workaround
  const barDataSortByGen = (name: string, index: number) => {
    const genLength = genCategories.length;
    let talentGen: string = "";
    for (const genObj of generations) {
      const genName = Object.keys(genObj)[0];
      const talents = genObj[genName];
      if (talents.includes(name)) {
        talentGen = genName;
      }
    }
    const genIndex = genCategories.indexOf(talentGen);
    const arr = Array.from({ length: genLength }, (_, i) =>
      i === genIndex ? deathCounts[index] : 0
    );
    return arr;
  };
  
  const barSeries = holoMem.map((name, index) => {
    const d = {
      name: name,
      data: barDataSortByGen(name, index),
    };

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
