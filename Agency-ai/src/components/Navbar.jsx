import { useState } from "react";
import assets from "../assets/assets";
import ThemeToggle from "./ThemeToggle";
import itemNavbar from "../data/itemNavbar";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="logo" />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${sideBarOpen ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden"}  max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        {/* button menu close */}
        <img
          src={assets.close_icon}
          alt="closeIcon"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSideBarOpen(false)}
        />
        {itemNavbar.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="sm:hover:border-b capitalize"
            onClick={() => setSideBarOpen(false)}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* button menu open */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menuIcon"
          className="w-8 sm:hidden"
          onClick={() => setSideBarOpen(true)}
        />
        <a
          href="#connect"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect <img src={assets.arrow_icon} alt="arrowIcon" width={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
