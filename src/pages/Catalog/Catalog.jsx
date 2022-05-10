import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../api/courseApi";
import Course from "../../components/Course/Course";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
      <Swiper spaceBetween={50} slidesPerView={1} navigation={true} modules={[Navigation]}>
        {courses.map((c) => (
          <Link to={`/formations/${c.id}`} key={c.id}>
            <SwiperSlide key={c.id}>
              <Course course={c} />
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </section>
  );
};

export default Catalog;
