import Back from "../components/Back";

const Difficulty = () => {
  return (
    <div className="main-container">
      <h1 className="title">
        Choose Your
        <br /> Challenge!
      </h1>
      <button className="game-btn">
        EASY
        <br />
        (40% All accuracy){" "}
      </button>
      <button className="game-btn">
        NORMAL
        <br />
        (65% All accuracy){" "}
      </button>
      <button className="game-btn">
        HARD
        <br />
        (85% All accuracy){" "}
      </button>
      <Back />
    </div>
  );
};

export default Difficulty;
