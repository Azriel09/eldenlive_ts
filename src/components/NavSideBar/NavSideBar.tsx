import { useState } from "react";
import { Outlet } from "react-router-dom";

import {
  Sidebar,
  Menu,
  MenuItem,
  MenuItemStyles,
  ElementStyles,
} from "react-pro-sidebar";

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

export default function SideBarNav() {
  const [toggled, setToggled] = useState<boolean>(true);
  return (
    <>
      <Sidebar
        backgroundColor="rgba(28, 29, 33, 1)"
        toggled={false}
        breakPoint="all"
        width="350px"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
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
          <MenuItem disabled></MenuItem>
        </Menu>
      </Sidebar>
      <Outlet />
    </>
  );
}
