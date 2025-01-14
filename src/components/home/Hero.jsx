import SearchSection from "./SearchSection";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-y-10 ">
      <div className="w-full md:w-1/2 md:mr-12">
        <h3 className="text-lg lg:text-xl font-bold text-accentHover Nunito Sans mb-4">
          Smart Living Made Simple
        </h3>
        <h1 className="text-3xl lg:text-5xl font-bold text-primary nanumMyeongjo-font mb-6">
          Discover Your Ultimate Hostel Management Solution
        </h1>
        <p className="text-md lg:text-lg text-gray-600">
          Our platform ensures seamless hostel management with cutting-edge
          features, prioritizing comfort, efficiency, and satisfaction for all
          users.
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
