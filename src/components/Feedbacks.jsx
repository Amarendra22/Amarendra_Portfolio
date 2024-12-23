import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl xs:w-[1020px] w-full'
  >

    <div>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-1 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[230px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications, Achievements and Competitions</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "certifications");
