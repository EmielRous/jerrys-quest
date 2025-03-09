import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { VisibilityProvider } from "./components/VisibilityContext.tsx";
import "./App.css";
import BureauLevel from "./levels/desk_level/bureau_level/BureauLevel.tsx";
import DeskLevel from "./levels/desk_level/DeskLevel.tsx";
import RaamLevel from "./levels/desk_level/raam_level/RaamLevel.tsx";
import TafelLevel from "./levels/desk_level/tafel_level/TafelLevel.tsx";
import TapijtLevel from "./levels/deur_level/tapijt_level/TapijtLevel.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import Inventory from "./components/Inventory.tsx";
import {
  BureauLevelPaths,
  DeskLevelPaths,
  DeurLevelPaths,
  Levels,
  saveArrayToStorage,
  STORAGE_KEY,
} from "./utils.tsx";
import KaartLevel from "./levels/desk_level/bureau_level/kaart_level/KaartLevel.tsx";
import WikiLevel from "./levels/desk_level/bureau_level/wiki_level/WikiLevel.tsx";
import SchilderijLevel from "./levels/desk_level/bureau_level/schilderij_level/SchilderijLevel.tsx";
import DeurLevel from "./levels/deur_level/DeurLevel.tsx";
import DozenLevel from "./levels/deur_level/dozen_level/DozenLevel.tsx";
import KastLevel from "./levels/desk_level/kast_level/KastLevel.tsx";

function App() {
  return (
      <VisibilityProvider>
    <Router>
      <div>
        <div className={"border border-red-100 h-[768px] w-[1024px]"}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${Levels.DeskLevel}`} />}
            />
            {/**DESK LEVEL**/}
            <Route path={`/${Levels.DeskLevel}`} element={<DeskLevel />} />
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.BureauLevel}`}
              element={<BureauLevel />}
            />
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.RaamLevel}`}
              element={<RaamLevel />}
            />
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.TafelLevel}`}
              element={<TafelLevel />}
            />
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.KastLevel}`}
              element={<KastLevel />}
            />
            {/*****BUREAU LEVEL********/}
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.BureauLevel}/${BureauLevelPaths.KaartLevel}`}
              element={<KaartLevel />}
            />
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.BureauLevel}/${BureauLevelPaths.SchilderijLevel}`}
              element={<SchilderijLevel />}
            />
            <Route
              path={`/${Levels.DeskLevel}/${DeskLevelPaths.BureauLevel}/${BureauLevelPaths.WikiLevel}`}
              element={<WikiLevel />}
            />

            {/**DEUR LEVEL**/}
            <Route path={`/${Levels.DeurLevel}`} element={<DeurLevel />} />
            <Route
              path={`/${Levels.DeurLevel}/${DeurLevelPaths.DozenLevel}`}
              element={<DozenLevel />}
            />
            <Route
              path={`/${Levels.DeurLevel}/${DeurLevelPaths.TapijtLevel}`}
              element={<TapijtLevel />}
            />
          </Routes>
        </div>
        <NavigationBar />
        <Inventory />
      </div>
    </Router>
      </VisibilityProvider>
  );
}

export default App;
