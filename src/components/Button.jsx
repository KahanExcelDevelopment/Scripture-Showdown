const Button = ({ name, route, variant }) => {
  return (
    <a href={route} className="game-btn">
      {name}
    </a>
  );
};

export default Button;
