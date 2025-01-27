import SearchSection from "./SearchSection";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="flex flex-col items-center sm:items-start md:flex-row justify-around gap-y-10 md:gap-y-0 h-[680px] sm:h-[600px] md:h-[450px] lg:h-[500px] xl:h-[450px] w-[90%] sm:w-full mx-auto">
      <div className="w-full md:w-1/2 md:mr-12">
        <h3 className="text-lg lg:text-xl font-bold text-accentHover nunitoSans-font mb-4 w-[320px] sm:w-full">
          Scholarship Management System
        </h3>
        <h1 className="text-3xl lg:text-5xl font-bold text-primary nanumMyeongjo-font mb-6 w-[320px] sm:w-full">
          Discover Your Ultimate Scholarship
        </h1>
        <p className="text-md lg:text-lg text-gray-600 w-[320px] sm:w-full">
          Find the best scholarship for you. Search from thousands of
          scholarships available.
        </p>
        <SearchSection />
      </div>
      {/* hero slider */}
      <div className="w-full md:w-1/2">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
