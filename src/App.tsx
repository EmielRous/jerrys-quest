import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WikipediaLevel from "./levels/wikipedia_level/WikipediaLevel.tsx";
// import LevelTwo from "./levels/level_two/LevelTwo.tsx";
// import LevelThree from "./levels/level_three/LevelThree.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

function App() {
  return (
    <Router>
      <div>
        <div className={"border border-red-100 h-[768px] w-[1024px]"}>
          <Routes>
            <Route path="/wikipedia-level" element={<WikipediaLevel />} />
            <Route path="/level-two" element={<WikipediaLevel />} />
            <Route path="/level-three" element={<WikipediaLevel />} />
          </Routes>
        </div>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
