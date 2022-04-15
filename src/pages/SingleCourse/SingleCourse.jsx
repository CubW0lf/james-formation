import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findCourse } from "../../api/courseApi";
import { IoChevronBackSharp } from "react-icons/io5";
import { assets } from "../../api/assets.js";
import "./SingleCourse.css";

const SingleCourse = () => {
  const { id } = useParams("id");

  const [course, setCourse] = useState([]);

  useEffect(() => {
    findCourse(id).then((data) => setCourse(data));
  }, [id]);

  console.log(course);
  return (
    <section className="SingleCourse">
      <div className="top">
        <Link to="/formations">
          <IoChevronBackSharp />
          Retour au Catalogue
        </Link>
        <h1>{course.length !== 0 && course.name}</h1>
        <h2>Objectifs de la formation</h2>
        <p dangerouslySetInnerHTML={{ __html: course.length !== 0 && course.description }}></p>
      </div>
      {course.length !== 0 && <img src={`${assets}${course.image}`} alt="" className="featured-image" />}
      <div className="content">
        <h2>Contenu de la formation</h2>
        <p dangerouslySetInnerHTML={{ __html: course.length !== 0 && course.description }}></p>
        <div className="curve"></div>
        <div className="price">
          <p className="value">{course.length !== 0 && course.price} €</p>
          <p className="info">Net de TVA</p>
          <br />
          <p className="duration">{course.length !== 0 && course.duration} heures</p>
        </div>
      </div>
    </section>
  );
};

export default SingleCourse;
