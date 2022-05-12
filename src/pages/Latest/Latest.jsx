import formation from "../../assets/images/formation.jpg";
import { GoLightBulb } from "react-icons/go";
import "./Latest.css";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../api/courseApi";
import { strLimit } from "../../utils/utils.js";
import { Link } from "react-router-dom";
import Curve from "../../components/Curve/Curve";

const Latest = () => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    getAllCourses().then((data) => setLatest(data));
  }, []);

  return (
    <section className="Latest">
      <h1>Nos Formations</h1>
      <div className="container">
        <img src={formation} alt="Formations" className="not-mobile" />
        <ul>
          {latest.map((l) => (
            <li key={l.id}>
              <GoLightBulb />
              {strLimit(l.name, 40)}
            </li>
          ))}
          <Link to="/formations" className="catalog">
            <button>Catalogue</button>
          </Link>
        </ul>
      </div>
      <Curve />
    </section>
  );
};

export default Latest;
