const Gametitle = () => {
  return (
    <div className="logo">
      {/* Curved top */}
      <svg viewBox="0 0 700 220" className="logo-svg">
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD76A" />
            <stop offset="100%" stopColor="#F4A700" />
          </linearGradient>
        </defs>

        <path
          id="curve"
          d="M80 160 C250 40 450 40 620 160"
          fill="transparent"
        />

        <text className="logo-top">
          <textPath href="#curve" startOffset="50%">
            SCRIPTURE
          </textPath>
        </text>
      </svg>

      {/* Bottom */}
      <div className="logo-bottom">SHOWDOWN</div>
    </div>
  );
};

export default Gametitle;
