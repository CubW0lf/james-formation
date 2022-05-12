import { Link } from "react-router-dom";
import { assets } from "../../api/assets.js";
import "./Course.css";

const Course = ({ course }) => {
  return (
    <div className="Course">
      <Link to={`/formations/${course.id}`}>
        <img src={assets + course.image} alt="" />
        <p className="name">{course.name}</p>
      </Link>
    </div>
  );
};

export default Course;
