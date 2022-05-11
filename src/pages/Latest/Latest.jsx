import formation from "../../assets/images/formation.jpg";
import { GoLightBulb } from "react-icons/go";
import "./Latest.css";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../api/courseApi";
import { strLimit } from "../../utils/utils.js";
import { Link } from "react-router-dom";

const Latest = () => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    getAllCourses().then((data) => setLatest(data.slice(0, 3)));
  }, []);

  return (
    <section className="Latest">
      <div className="container">
        <h1>Nos Formations</h1>
        <ul>
          {latest.map((l) => (
            <li key={l.id}>
              <GoLightBulb />
              {strLimit(l.name, 40)}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/formations" className="catalog">
        <button>Catalogue</button>
      </Link>
      <img src={formation} alt="Formations" />
    </section>
  );
};

export default Latest;
