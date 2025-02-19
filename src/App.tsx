import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBarNav from "./components/NavSideBar/NavSideBar";
import { SideBarProvider } from "./context/SideBarContext";
import Home from "./pages/Home";
import Timestamps from "./pages/Timestamps";
function App() {
  return (
    <>
      {" "}
      <SideBarProvider>
        <Routes>
          <Route path="/" element={<SideBarNav />}>
            <Route index element={<Home />} />
            <Route path="timestamps" element={<Timestamps />} />
          </Route>
        </Routes>
      </SideBarProvider>
    </>
  );
}

export default App;
