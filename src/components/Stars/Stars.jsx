import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import "./Stars.css";

const Stars = ({ number }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars([]);
  }, []);

  for (let i = 0; i < number; i++) {
    stars.push(<AiFillStar />);
  }

  return <div className="Stars">{stars}</div>;
};

export default Stars;
