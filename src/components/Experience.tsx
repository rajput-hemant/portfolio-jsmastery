import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
