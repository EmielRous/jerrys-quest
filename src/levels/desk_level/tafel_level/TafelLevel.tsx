import ClickableImage from "../../../components/ClickableImage.tsx";
import { useNavigate } from "react-router-dom";

const TafelLevel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="relative h-[768px] w-[1024px]"
        src="/desk_level/tafel_level/TroepTafelView.png"
      />
      <ClickableImage
        path="/tafel_level/Blikje1.png"
        size={{ w: 50, h: 50 }}
        location={{ x: 100, y: 200 }}
      />
      <ClickableImage
        path="/tafel_level/Blikje2.png"
        size={{ w: 50, h: 50 }}
        location={{ x: 150, y: 200 }}
      />
      <ClickableImage
        path="/tafel_level/Blikje3.png"
        size={{ w: 50, h: 50 }}
        location={{ x: 200, y: 200 }}
      />
      <ClickableImage
        path="/tafel_level/DamsetDicht.png"
        size={{ w: 120, h: 120 }}
        location={{ x: 250, y: 300 }}
      />
      <ClickableImage
        path="/tafel_level/DamsetOpen.png"
        size={{ w: 120, h: 120 }}
        location={{ x: 350, y: 300 }}
      />
      <ClickableImage
        path="/tafel_level/Envelop.png"
        size={{ w: 80, h: 50 }}
        location={{ x: 400, y: 400 }}
      />
    </div>
  );
};

export default TafelLevel;
