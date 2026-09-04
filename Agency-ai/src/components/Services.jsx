import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertristing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver result.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We help you create a marketing strategy that drives result.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you build strong a social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt="bgImage"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solution that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
