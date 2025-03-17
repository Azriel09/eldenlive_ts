import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Typography } from "@mui/material";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import {
  Tree,
  Margit,
  Godrick,
  Wolf,
  Rennala,
  Radahn,
  Astel,
  Rykard,
  GodfreyGolden,
  Morgott,
  FireGiant,
  Malenia,
  Godskin,
  Mohg,
  Maliketh,
  Gideon,
  Godfrey,
  Radagon,
  Beast,
} from "./BossImages";
import styles from "./BossSwiper.module.css";
import { BossSwiperTypes } from "./BossTypes";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/free-mode";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/thumbs";

// Duplicated Data multiple times because loop and slidespreview doesnt work well together lol
const bossList: string[] = [
  "Tree Sentinel",
  "Margit",
  "Godrick",
  "Wolf of Radagon",
  "Rennala",
  "Radahn",
  "Astel",
  "Rykard",
  "Godfrey Golden Shade",
  "Morgott",
  "Fire Giant",
  "Malenia",
  "Godskin Duo",
  "Mohg",
  "Maliketh",
  "Gideon",
  "Godfrey",
  "Radagon",
  "Elden Beast",
  "Tree Sentinel",
  "Margit",
  "Godrick",
  "Wolf of Radagon",
  "Rennala",
  "Radahn",
  "Astel",
  "Rykard",
  "Godfrey Golden Shade",
  "Morgott",
  "Fire Giant",
  "Malenia",
  "Godskin Duo",
  "Mohg",
  "Maliketh",
  "Gideon",
  "Godfrey",
  "Radagon",
  "Elden Beast",
  "Tree Sentinel",
  "Margit",
  "Godrick",
  "Wolf of Radagon",
  "Rennala",
  "Radahn",
  "Astel",
  "Rykard",
  "Godfrey Golden Shade",
  "Morgott",
  "Fire Giant",
  "Malenia",
  "Godskin Duo",
  "Mohg",
  "Maliketh",
  "Gideon",
  "Godfrey",
  "Radagon",
  "Elden Beast",
  "Tree Sentinel",
  "Margit",
  "Godrick",
  "Wolf of Radagon",
  "Rennala",
  "Radahn",
  "Astel",
  "Rykard",
  "Godfrey Golden Shade",
  "Morgott",
  "Fire Giant",
  "Malenia",
  "Godskin Duo",
  "Mohg",
  "Maliketh",
  "Gideon",
  "Godfrey",
  "Radagon",
  "Elden Beast",
];

const bossFullName: string[] = [
  "Tree Sentinel",
  "Margit - The Fell Omen",
  "Godrick - The Grafted",
  "Red Wolf of Radagon",
  "Rennala - Queen of the Full Moon",
  "Starscourge Radahn",
  "Astel - Naturalborn of the Void",
  "Rykard - Lord of Blasphemy",
  "Godfrey - First Elden Lord (Golden Shade)",
  "Morgott - The Omen King",
  "Fire Giant",
  "Malenia - Blade of Miquella",
  "Godskin Duo",
  "Mohg - Lord of Blood",
  "Maliketh - The Black Blade",
  "Sir Gideon Ofnir - The All Knowing",
  "Godfrey - First Elden Lord",
  "Radagon of the Golden Order",
  "Elden Beast",
];
export default function BossSwiper({ setSelectedBoss }: BossSwiperTypes) {
  const BossImage = (bossIndex: number) => {
    let arrIndex = bossIndex;
    if (bossIndex >= 19) {
      arrIndex = bossIndex % 19;
    }
    switch (arrIndex) {
      case 0:
        return Tree();
      case 1:
        return Margit();
      case 2:
        return Godrick();
      case 3:
        return Wolf();
      case 4:
        return Rennala();
      case 5:
        return Radahn();
      case 6:
        return Astel();
      case 7:
        return Rykard();
      case 8:
        return GodfreyGolden();
      case 9:
        return Morgott();
      case 10:
        return FireGiant();
      case 11:
        return Malenia();
      case 12:
        return Godskin();
      case 13:
        return Mohg();
      case 14:
        return Maliketh();
      case 15:
        return Gideon();
      case 16:
        return Godfrey();
      case 17:
        return Radagon();
      case 18:
        return Beast();
    }
  };
  const handleChange = (e: SwiperClass) => {
    let slide = e.realIndex ?? 0;
    slide = slide >= 19 ? slide % 19 : slide;
    setSelectedBoss(bossFullName[slide]);
  };
  return (
    <>
      {" "}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "white",
            width: "90%",
          } as React.CSSProperties & Record<string, string>
        }
        onSlideChange={(e) => handleChange(e)}
        slidesPerView={"auto"}
        slideToClickedSlide={true}
        spaceBetween={10}
        navigation={true}
        loop={true}
        // it starts around the middle so slides preview will show up no matter what direction the user will slide into
        initialSlide={39}
        modules={[Navigation, FreeMode, Thumbs]}
        className={styles.mySwiper2}
        centeredSlides={true}
      >
        {bossList.map((boss, index) => {
          return (
            <SwiperSlide
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                width: "225px",
                height: "375px",
                position: "relative",
                cursor: "pointer",
              }}
              key={index}
              className={styles.swiper_slide}
            >
              {({ isActive }) => (
                <>
                  <Typography
                    sx={{
                      fontFamily: "Elden Ring",
                      fontSize: "1.9em",
                      color: "lightgray",
                      position: "absolute",
                      textShadow: "3px 3px #000",
                      textAlign: "left",
                    }}
                  >
                    {boss}
                  </Typography>
                  {isActive ? (
                    <img
                      src={BossImage(index)}
                      style={{
                        borderRadius: "10px",
                        opacity: "1",
                      }}
                    />
                  ) : (
                    <img
                      src={BossImage(index)}
                      style={{
                        borderRadius: "10px",
                        opacity: "0.4",
                      }}
                    />
                  )}
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
