import { motion } from "framer-motion";

import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("left", "spring", 0.1, 1)}
        className="mt-4 text-secondary max-w-3xl leading-8"
      >
        I'm a skilled software developer with experience in Typescript, and
        expertise in frameworks like React, Node.js, and Three.js. I'm q quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>
      {/* cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
