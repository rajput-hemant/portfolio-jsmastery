import { motion } from "framer-motion";

import { Testimonial } from "../constants";
import { fadeIn } from "../utils/motion";

interface FeedbackCardProps extends Testimonial {
  index: number;
}

const FeedbackCard = ({
  name,
  company,
  image,
  designation,
  index,
  testimonial,
}: FeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
