import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../api/courseApi";
import Course from "../../components/Course/Course";
import "./Catalog.css";

const Catalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <section className="Catalog">
      <h1>Catalogue de Formations</h1>
      <div className="grid">
        {courses.map((c) => (
          <Link to={`/formations/${c.id}`} key={c.id}>
            <Course course={c} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
