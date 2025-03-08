import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WikipediaLevel from "./levels/wikipedia_level/WikipediaLevel.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import DeskLevel from "./levels/desk_level/DeskLevel.tsx";
import CustomCursor from "./components/CustomCursor.tsx";

function App() {
  return (
    <Router>
      <div>
        <div className={"border border-red-100 h-[768px] w-[1024px]"}>
          <Routes>
            <Route path="/wikipedia-level" element={<WikipediaLevel />} />
            <Route path="/desk-level" element={<DeskLevel />} />
            <Route path="/level-three" element={<WikipediaLevel />} />
          </Routes>
        </div>
        <NavigationBar />
        {/*<CustomCursor />*/}
      </div>
    </Router>
  );
}

export default App;
