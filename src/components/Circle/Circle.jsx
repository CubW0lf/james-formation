import { useInView } from "react-intersection-observer";
import "./Circle.css";

const Circle = ({ value }) => {
  const { ref, inView } = useInView();
  return (
    <svg viewBox="0 0 36 36" className={`Circle ${inView ? "active" : ""}`} width="100%" height="100%" ref={ref}>
      <path
        className="around"
        strokeDasharray="100, 100"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      ></path>
      <path
        className="percent"
        strokeDasharray={`${value}, 100`}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      ></path>
      <text x="18" y="14" textAnchor="middle" dy="7" fontSize="20">
        {value}%
      </text>
    </svg>
  );
};

export default Circle;
