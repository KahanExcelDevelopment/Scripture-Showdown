import { useNavigate } from "react-router-dom";

const Next = () => {
  const navigate = useNavigate();

  return (
    <button className="next-btn" onClick={() => navigate("/play")}>
      Next
    </button>
  );
};

export default Next;
