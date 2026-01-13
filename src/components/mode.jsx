const mode = ({ name, route, variant }) => {
  return (
    <a href={route} className="game-btn">
      {name}
    </a>
  );
};

export default mode;
