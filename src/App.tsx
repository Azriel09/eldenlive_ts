import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBarNav from "./components/NavSideBar/NavSideBar";
import { SideBarProvider } from "./context/SideBarContext";
import Home from "./pages/Home";
import Boss from "./pages/Boss";
import Timestamps from "./pages/Timestamps";
import { SelectedTalentProvider } from "./context/TalentContext";
import { DataFetch } from "./services/DataFetcher";
import LoadingComponent from "./components/global/Loading";
function App() {
  const { isPending } = DataFetch();
  if (isPending) {
    return <LoadingComponent />;
  }
  return (
    <>
      {" "}
      <SideBarProvider>
        <SelectedTalentProvider>
          <Routes>
            <Route path="/" element={<SideBarNav />}>
              <Route index element={<Home />} />
              <Route path="timestamps/:vtuberId" element={<Timestamps />} />
              <Route path="boss" element={<Boss />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </SelectedTalentProvider>
      </SideBarProvider>
    </>
  );
}

export default App;
