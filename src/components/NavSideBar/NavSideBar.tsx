import { useState } from "react";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemStyles,
  ElementStyles,
  menuClasses,
} from "react-pro-sidebar";
import styles from "./NavSideBar.module.css";
import { TalentIconByName } from "./icons";
interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

const icons: string[] = ["ame", "gura", "irys", "calli", "ina", "kronii"];
const talentNames: string[] = [
  "Amelia Watson",
  "Gawr Gura",
  "IRyS",
  "Mori Calliope",
  "Ninomae Ina'nis",
  "Ouro Kronii",
];

export default function SideBarNav() {
  const [toggled, setToggled] = useState<boolean>(true);
  return (
    <>
      <Sidebar
        backgroundColor="rgba(28, 29, 33, 1)"
        toggled={true}
        breakPoint="all"
        width="350px"
      >
        <Menu
          menuItemStyles={{
            button: () => {
              return {
                color: "#b9b9bb",
                backgroundColor: "rgba(28, 29, 33, 1)",
                paddingLeft: "75px",
                fontWeight: "500",
                letterSpacing: "0.5px",
                "&:hover": {
                  backgroundColor: "#2c2d33 !important",
                },
              };
            },
          }}
        >
          <MenuItem disabled></MenuItem>
          <MenuItem disabled></MenuItem>{" "}
          <Typography className={styles.typography}>
            Death Timestamps
          </Typography>
          <SubMenu
            label="Hololive EN"
            rootStyles={{
              ["& > ." + menuClasses.button]: {
                backgroundColor: "#1c1d21",
                color: "#b9b9bb",
                letterSpacing: "0.5px",
              },

              ["." + menuClasses.subMenuContent]: {
                backgroundColor: "#1c1d21",
              },
            }}
          >
            {icons.map((talent, index) => {
              return (
                <MenuItem
                  key={talent}
                  onClick={() => setToggled(!toggled)}
                  icon={<TalentIconByName name={talent} />}
                >
                  {talentNames[index]}
                </MenuItem>
              );
            })}
          </SubMenu>
        </Menu>
      </Sidebar>
      <Outlet />
    </>
  );
}
