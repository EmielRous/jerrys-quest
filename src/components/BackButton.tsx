import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <RiArrowGoBackFill
      onClick={() => navigate(-1)}
      className={
        "size-12 z-50 fixed top-5 left-5 hover:scale-105 hover:cursor-pointer"
      }
    />
  );
};

export default BackButton;
