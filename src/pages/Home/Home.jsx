import PopUp from "../../components/PopUp/PopUp";
import Progress from "../../components/Progress/Progress";
import Confidence from "../Confidence/Confidence";
import Instructors from "../Instructors/Instructors";
import Latest from "../Latest/Latest";
import Security from "../Security/Security";
import ShowCase from "../ShowCase/ShowCase";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Progress />
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
