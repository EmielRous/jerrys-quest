import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WikipediaLevel from "./levels/wikipedia_level/WikipediaLevel.tsx";
import DeskLevel from "./levels/desk_level/DeskLevel.tsx";
import RaamLevel from "./levels/raam_level/RaamLevel.tsx";
import TafelLevel from "./levels/tafel_level/TafelLevel.tsx";
import TapijtLevel from "./levels/tapijt_level/TapijtLevel.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import Inventory from "./components/Inventory.tsx";
import { saveArrayToStorage, STORAGE_KEY } from "./utils.tsx";

document.body.style.cursor = "url('/Cursor.png'), default";

function App() {
  return (
    <Router>
      <div>
        <div className={"border border-red-100 h-[768px] w-[1024px]"}>
          <Routes>
            <Route path="/wikipedia-level" element={<WikipediaLevel />} />
            <Route path="/desk-level" element={<DeskLevel />} />
            <Route path="/raam-level" element={<RaamLevel />} />
            <Route path="/tafel-level" element={<TafelLevel />} />
            <Route path="/tapijt-level" element={<TapijtLevel />} />
          </Routes>
        </div>
        <NavigationBar />
        <Inventory />
      </div>
    </Router>
  );
}

export default App;
