import { useEffect, useState } from "react";
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
          <Course key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
