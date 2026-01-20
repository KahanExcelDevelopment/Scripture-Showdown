import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <button className="game-btn" onClick={() => navigate(-1)}>
      BACK
    </button>
  );
};

export default Back;
