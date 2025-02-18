import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBarNav from "./components/NavSideBar/NavSideBar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBarNav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
