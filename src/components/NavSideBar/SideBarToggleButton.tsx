import { useSidebar } from "../../context/SideBarContext";
import CoverIcon from "../../assets/cover-icon.png";
import styles from "./NavSideBar.module.css";
export default function SideBarToggleButton() {
  const { toggleSidebar } = useSidebar();
  return (
    <button onClick={toggleSidebar} className={styles.coverButton}>
      <img src={CoverIcon} alt="cover-icon" className={styles.coverIcon} />
    </button>
  );
}
