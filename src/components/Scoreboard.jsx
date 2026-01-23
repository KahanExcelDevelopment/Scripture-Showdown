const Scoreboard = () => {
  return (
    <div className="scoreboard">
      <div className="score left">{score2}</div>

      <div className="score-container">PLAYERS</div>

      <div className="score right">{score1}</div>
    </div>
  );
};

export default Scoreboard;
