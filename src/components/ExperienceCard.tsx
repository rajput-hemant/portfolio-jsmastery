import { VerticalTimelineElement } from "react-vertical-timeline-component";

import { Experience } from "../constants";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary font-semibold m-0">
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-white text-sm pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
