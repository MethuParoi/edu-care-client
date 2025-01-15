import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import OurFacilities from "../components/home/OurFacilities";
import Tabs from "../components/home/Tabs";

const Home = () => {
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-10 px-5">
      <Helmet>
        <title>CloudHostel | Home</title>
      </Helmet>
      {/* hero section */}
      <Hero />
      {/* Tabs section */}
      <Tabs />
      <OurFacilities />
    </div>
  );
};

export default Home;
