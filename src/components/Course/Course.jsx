import { assets } from "../../api/assets.js";
import "./Course.css";

const Course = ({ course }) => {
  return (
    <div className="Course">
      <img src={assets + course.image} alt="" />
      <p className="name">{course.name}</p>
    </div>
  );
};

export default Course;
