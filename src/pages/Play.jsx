const Play = ({ leftScore, rightScore, round }) => {
  return (
    <div className="scoreboard">
      <div className="score score-left">{leftScore}</div>

      <div className="round-box">
        <span className="round-text">ROUND {round}</span>
        <span className="round-hebrew">1 thess 5:21</span>
      </div>

      <div className="score score-right">{rightScore}</div>
    </div>
  );
};

export default Play;
