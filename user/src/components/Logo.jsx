// Sage brand mark — a gradient leaf (growth / wisdom) used as the app logo and AI avatar.
const Logo = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    role="img"
    aria-label="Sage logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sageGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a5b4fc" />
        <stop offset="55%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* leaf body */}
    <path
      d="M12 2.5C17.5 6.5 18 14 12 21.5 6 14 6.5 6.5 12 2.5Z"
      fill="url(#sageGradient)"
    />
    {/* central vein + two side veins */}
    <g stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.1" strokeLinecap="round" fill="none">
      <path d="M12 5.2C11.4 11 11.4 15 12 19.4" />
      <path d="M11.9 10.2C10.6 10.5 9.7 11.1 9.1 12" />
      <path d="M12.1 13.2C13.4 13.5 14.3 14.1 14.9 15" />
    </g>
  </svg>
);

export default Logo;
