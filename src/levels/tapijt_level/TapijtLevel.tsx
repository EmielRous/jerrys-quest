import ClickableImage from "../../components/ClickableImage.tsx";

const TapijtLevel: React.FC = () => {
  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        src="/deur_level/tapijt_level/TapijtView.png"
      />
      <ClickableImage
        path="/tapijt_level/Lamp.png"
        size={{ w: 100, h: 100 }}
        location={{ x: 300, y: 100 }}
      />
      <ClickableImage
        path="/tapijt_level/TapijtQR.png"
        size={{ w: 150, h: 150 }}
        location={{ x: 500, y: 200 }}
      />
      <ClickableImage
        path="/tapijt_level/TapijtSolved.png"
        size={{ w: 200, h: 200 }}
        location={{ x: 400, y: 300 }}
      />
    </div>
  );
};

export default TapijtLevel;
