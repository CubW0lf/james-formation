import PopUp from "../../components/PopUp/PopUp";
import Progress from "../../components/Progress/Progress";
import Companies from "../Companies/Companies";
import Confidence from "../Confidence/Confidence";
import Instructor from "../Instructor/Instructor";
import Latest from "../Latest/Latest";
import Security from "../Security/Security";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Progress />
      <Latest />
      <Companies />
      <Security />
      <Confidence />
      <Instructor />
      <PopUp />
    </div>
  );
};

export default Home;
