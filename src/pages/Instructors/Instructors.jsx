import { useState, useEffect } from "react";
import { findInstructors } from "../../api/instructorApi";
import Instructor from "../../components/Instructor/Instructor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Instructors.css";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    findInstructors().then((data) => {
      setInstructors(data);
    });
  }, []);

  return (
    <section className="Instructors">
      <h1>Nos Formateurs</h1>
      <Swiper spaceBetween={50} slidesPerView={1} navigation={true} modules={[Navigation]}>
        {instructors.map((i) => (
          <SwiperSlide key={i.id}>
            <Instructor name={i.fullname} image={i.picture} bio={i.bio} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Instructors;
