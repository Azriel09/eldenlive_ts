import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBarNav from "./components/NavSideBar/NavSideBar";
import { SideBarProvider } from "./context/SideBarContext";
import Home from "./pages/Home";
import Timestamps from "./pages/Timestamps";
import { SelectedTalentProvider } from "./context/TalentContext";
function App() {
  return (
    <>
      {" "}
      <SideBarProvider>
        <SelectedTalentProvider>
          <Routes>
            <Route path="/" element={<SideBarNav />}>
              <Route index element={<Home />} />
              <Route path="timestamps/:vtuberId" element={<Timestamps />} />
            </Route>
          </Routes>
        </SelectedTalentProvider>
      </SideBarProvider>
    </>
  );
}

export default App;
