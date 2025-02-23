import { Slider } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelectedTalent } from "../../context/TalentContext";
import ReactPlayer from "react-player";
import moment from "moment";
interface TimestampsSliderProps {
  data: Record<string, any>;
  selectedStream: string;
  playerRef: React.RefObject<ReactPlayer>;
}
interface SliderData {
  value: number;
}
const YT_API = import.meta.env.VITE_YOUTUBE_API_KEY;
export default function TimestampsSlider({
  data,
  selectedStream,
  playerRef,
}: TimestampsSliderProps) {
  const { selectedTalent } = useSelectedTalent();
  const [enemies, setEnemies] = useState<string[] | undefined>();

  const [max, setMax] = useState<number>();
  const [sliderData, setSliderData] = useState<SliderData[]>();
  const [npc, setNPC] = useState<boolean>(false);
  const [boss, setBoss] = useState<boolean>(false);
  useEffect(() => {
    const temp_e: string[] = data[selectedTalent][selectedStream]["enemies"];
    const temp_t: string[] = data[selectedTalent][selectedStream]["timestamps"];
    const temp_a: [] = [];

    // Converting each timestamps into total seconds
    temp_t.map((t) => {
      const tempo: { value: number } = { value: 0 };
      let a = t.split(":");
      const totalSeconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
      tempo.value = Number(totalSeconds);

      temp_a.push(tempo);
    });

    setEnemies(temp_e);
    setSliderData(temp_a);

    // Getting the video ID
    const url = selectedStream.replace("watch?v=", "embed/");
    const id = url.split("/").pop();
    getVideoDuration(id);
  }, [selectedStream]);

  const getVideoDuration = async (id: string) => {
    // Via Youtube API
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${YT_API}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const iso8601Duration = data.items[0].contentDetails.duration;
      const secondsDuration = moment.duration(iso8601Duration).asSeconds();

      setMax(secondsDuration);
    } catch (error) {
      console.error(error);
    }
  };
  function valueLabelFormat(value: number) {
    let index = sliderData.findIndex((mark) => mark.value === value);

    try {
      if (enemies[index].includes("Boss")) {
        const death = enemies[index].replace("Boss", "");

        return death;
      } else if (enemies[index].includes("NPC")) {
        const death = enemies[index].replace("NPC", "");
        return death;
      } else {
        return enemies[index];
      }
    } catch (err) {}
  }
  function valuetext(value) {
    return;
  }
  const checkBoss = (e) => {
    const index = sliderData.findIndex((mark) => mark.value === e.target.value);
    console.log(e.target.value);
    playerRef.current?.seekTo(e.target.value - 2);
    if (enemies[index].includes("Boss")) {
      setBoss(true);
      setNPC(false);
    } else if (enemies[index].includes("NPC")) {
      setNPC(true);
      setBoss(false);
    } else {
      setBoss(false);
      setNPC(false);
    }
  };
  return (
    <div>
      {" "}
      {sliderData && (
        <Slider
          aria-label="Restricted values"
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          step={null}
          min={0}
          max={max}
          onChange={(e) => checkBoss(e)}
          marks={sliderData}
          track={false}
          sx={[
            {
              color: "rgba(0,0,0,0)",
              // backgroundColor: "#323233",
              width: "92vw",

              "& .MuiSlider-mark": {
                backgroundColor: "red",
                height: "17px",
                width: "1px",
                borderRadius: "1px",
                "&:hover": {
                  width: "2px",
                  height: "20px",
                },
              },
              "& .MuiSlider-thumb": {
                color: "#b9b9bb",
                height: 25,
                width: "3px",
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "gray",
              },
            },
            boss && {
              "& .MuiSlider-valueLabel": {
                backgroundColor: "lightblue",
                color: "black",
              },
            },
            npc && {
              "& .MuiSlider-valueLabel": {
                backgroundColor: "green",
                color: "white",
              },
            },
          ]}
        />
      )}
    </div>
  );
}
