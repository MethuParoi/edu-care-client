import bgImg from "../../assets/hero/volunter.png";
const Students = () => {
  return (
    <div
      className="xl:max-w-[1300px] mx-auto flex md:flex-row items-center md:justify-around flex-col-reverse gap-y-8 md:gap-y-0 pt-6 pb-16 md:pt-16"
      id="donation-section"
    >
      <div className="w-[90vw] md:w-[40vw]">
        <p className="amatic-font text-secondary dark:text-gray-400 sm:text-3xl text-2xl font-semibold">
          Join Us
        </p>
        <h2 className="sm:text-5xl text-4xl font-semibold mt-5 mb-8 quicksand-font text-gray-700 dark:text-gray-200">
          Why We Need You
        </h2>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          We need you to help us in our mission to provide education to every
          child in the world. We believe that every child deserves a quality
          education, and we need your help to make that happen. By volunteering
          with us, you can make a real difference in the lives of children
          around the world. Join us today and help us make a difference.{" "}
        </p>
        <div className="flex justify-start items-center mt-8">
          <button
            onClick={() =>
              window.open(
                "https://www.savethechildren.org/us/ways-to-help/how-to-volunteer",
                "_blank"
              )
            }
            className="bg-secondary dark:bg-gray-500 dark:hover:bg-gray-600 hover:bg-teal-600 text-white text-2xl font-semibold px-5 py-2 rounded-lg"
          >
            Join Now
          </button>
        </div>
      </div>

      <div className="w-[90vw] md:w-[40vw] relative">
        <img
          className="h-[350px] sm:h-[500px] w-[750px] rounded-xl object-contain"
          src={bgImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Students;
