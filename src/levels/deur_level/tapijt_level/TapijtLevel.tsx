import ClickableImage from "../../../components/ClickableImage.tsx";
import BackButton from "../../../components/BackButton.tsx";

const TapijtLevel: React.FC = () => {
  return (
    <div>
      <BackButton />
      <img
        className="relative h-[768px] w-[1024px]"
        src="/deur_level/tapijt_level/TapijtView.png"
      />
      <ClickableImage
        path="/deur_level/tapijt_level/TapijtSolved.png"
        size={{ w: 300, h: 420 }}
        location={{ x: 420, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/tapijt_level/TapijtQR.png"
        size={{ w: 300, h: 420 }}
        location={{ x: 420, y: 200 }}
      />
      <ClickableImage
        path="/deur_level/tapijt_level/Lamp.png"
        size={{ w: 130, h: 130 }}
        location={{ x: 594, y: 374 }}
      />
    </div>
  );
};

export default TapijtLevel;
