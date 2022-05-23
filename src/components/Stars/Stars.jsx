import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import "./Stars.css";

const Stars = ({ number }) => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    if (stars !== null) {
      for (let i = 0; i < number; i++) {
        stars.push({ index: i, icon: <AiFillStar /> });
      }
    } else {
      setStars([]);
    }
  }, [number, stars]);

  return <div className="Stars">{stars !== null && stars.map((s) => <span key={s.index}>{s.icon}</span>)}</div>;
};

export default Stars;
