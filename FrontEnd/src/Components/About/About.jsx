import "./About.css";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiWaterSplash } from "react-icons/gi";
import { IoWater } from "react-icons/io5";

const About = () => {
  return (
    <>
      <h1 className="head">How have you been interesting on the products ?</h1>
      <h2 className="head_small">About Instruction</h2>

      <div className="about">
        <div className="about_box">
          <FaHandHoldingWater className="about_logo" />
          <h2>
            Fresh <span>Water</span>
          </h2>
          <p>
            this is a water that our company Refined its into spaces to reach on
            this production, and have some types of striking implemented to
            user.
          </p>
        </div>

        <div className="about_box">
          <GiWaterSplash className="about_logo" />
          <h2>
            States of <span>Water</span>
          </h2>
          <p>
            it is demanding and sort to many time, for becoming a good
            production convey into markets and we need to fresh it for plenty
            consummers currently.
          </p>
        </div>

        <div className="about_box">
          <IoWater className="about_logo" />
          <h2>
            Dropping <span>Water</span>
          </h2>
          <p>
            as become a good drink, for many people, who life in the society
            after convincing its immediately. as long as we need to check and
            reinfore more.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
