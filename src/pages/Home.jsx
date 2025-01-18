import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import OurFacilities from "../components/home/OurFacilities";
import Tabs from "../components/home/Tabs";
import MembershipSection from "../components/home/MembershipSection";

const Home = () => {
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-10 px-5">
      <Helmet>
        <title>CloudHostel | Home</title>
      </Helmet>
      {/* hero section */}
      <Hero />
      {/* Tabs section */}
      <p className=" text-primary dark:text-gray-400 sm:text-5xl text-4xl font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 w-[350px] mx-auto mt-5 mb-10">
        Featured Meals
      </p>
      <Tabs />
      {/* Membership section */}
      <MembershipSection />
      {/* Our Facilities section */}
      <OurFacilities />
    </div>
  );
};

export default Home;
