import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
