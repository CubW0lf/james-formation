import { useEffect, useState } from "react";
import { findMaintenace } from "../../api/maintenanceApi";
import PopUp from "../../components/PopUp/PopUp";
import Progress from "../../components/Progress/Progress";
import Confidence from "../Confidence/Confidence";
import Instructors from "../Instructors/Instructors";
import Latest from "../Latest/Latest";
import Security from "../Security/Security";
import ShowCase from "../ShowCase/ShowCase";
import "./Home.css";

const Home = () => {
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    findMaintenace(1).then((data) => {
      setMaintenance(data);
    });
  }, []);

  return (
    <div className="Home">
      {maintenance.true === true && <Progress />}
      <Latest />
      <ShowCase />
      <Security />
      <Confidence />
      <Instructors />
      <PopUp />
    </div>
  );
};

export default Home;
