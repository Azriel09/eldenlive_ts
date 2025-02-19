import { useSidebar } from "../context/SideBarContext";
export default function Hero() {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <button
      style={{ width: "100px", height: "25px" }}
      onClick={toggleSidebar}
    ></button>
  );
}
