import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700  dark:text-white"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img src={assets.group_profile} alt="grupProfile" className="w-20" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-24 max-w-5xl">
        Turning Imagination into{" "}
        <span className="bg-linear-to-r from-primary to-[#4d8cae] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </div>
      <div className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        Creating maningful connections and turning big ideas into interactive
        digital experiences.
      </div>
      <div className="relative">
        <img
          src={assets.hero_img}
          alt="heroImage"
          className="w-full max-w-6xl"
        />
        <img
          src={assets.bgImage1}
          alt="bgImage"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z1 dark:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
