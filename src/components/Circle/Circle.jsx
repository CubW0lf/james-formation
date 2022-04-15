import "./Circle.css";

const Circle = ({ value }) => {
  return (
    <svg viewBox="0 0 36 36" class="Circle">
      <path
        class="around"
        stroke-dasharray="100, 100"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      ></path>
      <path
        class="percent"
        stroke-dasharray={`${value}, 100`}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      ></path>
      <text x="18" y="14" text-anchor="middle" dy="7" font-size="20">
        {value}%
      </text>
    </svg>
  );
};

export default Circle;
