import workData from "../data/workData";
import Title from "./Title";
import { motion } from "motion/react";

const OurWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildern: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solution that move your business forward."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-105 duration-500 transition-all cursor-pointer"
          >
            <img src={work.img} alt={work.name} className="w-full rounded-xl" />
            <h2 className="mt-3 mb-2 text-lg font-semibold">{work.name}</h2>
            <p className="text-sm opacity-60 w-5/6">{work.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
