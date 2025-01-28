import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import TabRow from "../components/home/TabRow";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-10 px-2">
      <Helmet>
        <title>EduCare | Home</title>
      </Helmet>
      {/* hero section */}
      <Hero />
      {/* Tabs section */}
      <p className=" text-primary dark:text-gray-400 sm:text-5xl text-2xl font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 sm:w-[350px] w-[200px] ml-20  sm:mx-auto mt-5 mb-10">
        Top Scholarship
      </p>
      <TabRow />
      <Testimonials />
    </div>
  );
};

export default Home;
