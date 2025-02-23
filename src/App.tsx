import "./App.css";
import WikipediaLevel from "./levels/wikipedia_level/WikipediaLevel.tsx";

function App() {
  return (
    <div>
      <div className={"border border-red-100 h-[768px] w-[1024px]"}>
        <WikipediaLevel />
      </div>
    </div>
  );
}

export default App;
