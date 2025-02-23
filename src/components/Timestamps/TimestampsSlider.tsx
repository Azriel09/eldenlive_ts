import { Slider } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelectedTalent } from "../../context/TalentContext";
import moment from "moment";
interface TimestampsSliderProps {
  data: Record<string, any>;
  selectedStream: string;
}
const YT_API = import.meta.env.VITE_YOUTUBE_API_KEY;
export default function TimestampsSlider({
  data,
  selectedStream,
}: TimestampsSliderProps) {
  const { selectedTalent } = useSelectedTalent();
  const [enemies, setEnemies] = useState<string[]>();
  const [timestamps, setTimestamps] = useState<string[]>();
  const [max, setMax] = useState<number>();

  useEffect(() => {
    setEnemies(data[selectedTalent][selectedStream]["enemies"]);
    setTimestamps(data[selectedTalent][selectedStream]["timestamps"]);

    const url = selectedStream.replace("watch?v=", "embed/");
    const id = url.split("/").pop();
    getVideoDuration(id);
  }, [selectedStream]);
  const getVideoDuration = async (id) => {
    // Via Youtube API
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${YT_API}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const iso8601Duration = data.items[0].contentDetails.duration;
      const secondsDuration = moment.duration(iso8601Duration).asSeconds();
      console.log(secondsDuration);
      setMax(secondsDuration);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {" "}
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
            width: "98%",

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
    </div>
  );
}
