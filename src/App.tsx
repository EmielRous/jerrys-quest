import "./App.css";
import ClickableImage from "./Components/ClickableImage.tsx";

const levelMap = {
  1: {
    backgroundImage: "/wikipedia_level/Desk-background.png",
    images: [
      {
        path: "/wikipedia_level/Desk-lampOFF.png",
        visible: true,
        size: {
          w: 50,
          h: 50,
        },
        location: {
          x: 100,
          y: 100,
        },
      },
      {
        path: "/wikipedia_level/Desk-lampON.png",
        visible: false,
        size: {
          w: 50,
          h: 50,
        },
        location: {
          x: 100,
          y: 100,
        },
      },
      {
        path: "/wikipedia_level/Desk-lampToggle.png",
        visible: true,
        size: {
          w: 50,
          h: 50,
        },
        location: {
          x: 100,
          y: 100,
        },
      },
    ],
  },
  2: {
    backgroundImage: "/wikipedia_level/Desk-background.png",
    images: [
      {
        path: "/wikipedia_level/Desk-lampOFF.png",
        visible: true,
        size: {
          w: 50,
          h: 50,
        },
        location: {
          x: 100,
          y: 100,
        },
      },
      {
        path: "/wikipedia_level/Desk-lampON.png",
        visible: false,
        size: {
          w: 50,
          h: 50,
        },
        location: {
          x: 100,
          y: 100,
        },
      },
      {
        path: "/wikipedia_level/Desk-lampToggle.png",
        visible: true,
        size: {
          w: 50,
          h: 50,
        },
        location: {
          x: 100,
          y: 100,
        },
      },
    ],
  },
};

function App() {
  return (
    <div className={"scale-75"}>
      <div className={"border border-red-100 h-[768px] w-[1024px]"}>
        {Object.entries(levelMap).map(([_, level]) => {
          return (
            <div className={"relative"}>
              <img className={"relative"} src={level.backgroundImage} />
              {level.images.map((image) => {
                return (
                  <ClickableImage
                    size={image.size}
                    path={image.path}
                    location={image.location}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
