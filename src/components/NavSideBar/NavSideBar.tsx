import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import styles from "./NavSideBar.module.css";
import { useSidebar } from "../../context/SideBarContext";
import { TalentIconByName } from "./icons";
import { useSelectedTalent } from "../../context/TalentContext";
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
  const { isOpen, toggleSidebar } = useSidebar();
  const { setSelectedTalent } = useSelectedTalent();
  const handleTalentClick = (talent) => {
    toggleSidebar();
    setSelectedTalent(talent);
  };
  return (
    <>
      <Sidebar
        backgroundColor="rgba(28, 29, 33, 1)"
        toggled={isOpen}
        breakPoint="all"
        onBackdropClick={toggleSidebar}
        width="275px"
        style={{
          borderRightWidth: "0",
        }}
      >
        <Menu
          menuItemStyles={{
            button: () => {
              return {
                color: "#b9b9bb",
                backgroundColor: "rgba(28, 29, 33, 1)",
                paddingLeft: "50px",
                fontWeight: "400",
                letterSpacing: "0.5px",
                "&:hover": {
                  backgroundColor: "#2c2d33 !important",
                },
              };
            },
          }}
        >
          {/* Disabled MenuItems for spacing lol */}
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
                  component={<Link to="timestamps" />}
                  onClick={() => handleTalentClick(talentNames[index])}
                  icon={<TalentIconByName name={talent} />}
                >
                  {talentNames[index]}
                </MenuItem>
              );
            })}
          </SubMenu>
          <MenuItem disabled></MenuItem>
          <Typography className={styles.typography}>Statistics</Typography>
        </Menu>
      </Sidebar>
      <Outlet />
    </>
  );
}
