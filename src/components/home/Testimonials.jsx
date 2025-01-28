import { SiComma } from "react-icons/si";

const Testimonials = () => {
  return (
    <div
      className="xl:max-w-[1300px] mx-auto flex lg:flex-row items-center lg:gap-x-10 md:justify-around flex-col-reverse gap-y-6 lg:gap-y-0 py-16 dark:text-gray-200"
      id="donation-section"
    >
      <div className="w-[90vw] lg:w-[32vw]">
        <div className="flex justify-start">
          <SiComma className="text-5xl text-gray-500" />
          <SiComma className="text-5xl text-gray-500 ml-[-15px]" />
        </div>
        <p className="text-lg text-gray-600  bg-white p-5 rounded-xl lg:line-clamp-6 xl:line-clamp-none">
          This education platform has been a game-changer for me. I have been
          able to access scholarships that I never knew existed. The process is
          seamless, and the team is always ready to help. I am grateful for the
          opportunity to further my studies.
        </p>
        <div className="flex justify-end items-center mt-5">
          <div className="flex flex-col items-end">
            <p className="text-gray-700 dark:text-gray-200 font-semibold mr-3 text-2xl">
              Ann Peterson
            </p>
            <p className="amatic-font text-secondary dark:text-gray-400 font-semibold text-3xl mr-3">
              Volunteer
            </p>
          </div>
          {/* <img
            className="w-16 h-16 rounded-full border-4 border-secondary"
            src={img1}
            alt=""
          /> */}
        </div>
      </div>
      <div className="w-[90vw] lg:w-[32vw]">
        <div className="flex justify-start">
          <SiComma className="text-5xl text-gray-500" />
          <SiComma className="text-5xl text-gray-500 ml-[-15px]" />
        </div>
        <p className="text-lg text-gray-600  bg-white p-5 rounded-xl lg:line-clamp-6 xl:line-clamp-none">
          I am so grateful to this platform for getting a scholarship. The
          resources and support provided have been invaluable in helping me
          achieve my academic goals. Highly recommended!
        </p>
        <div className="flex justify-end items-center mt-5">
          <div className="flex flex-col items-end">
            <p className="text-gray-700 dark:text-gray-200 font-semibold mr-3 text-2xl">
              John Doe
            </p>
            <p className="amatic-font text-secondary dark:text-gray-400 font-semibold text-3xl mr-3">
              Student
            </p>
          </div>
          {/* <img
            className="w-16 h-16 rounded-full border-4 border-secondary"
            src={img2}
            alt=""
          /> */}
        </div>
      </div>

      <div className="w-[90vw] lg:w-[40vw] lg:ml-10">
        <p className="amatic-font text-secondary dark:text-gray-400 sm:text-3xl text-2xl font-semibold">
          testimonials
        </p>
        <h2 className="sm:text-5xl text-4xl font-semibold mt-5 mb-8 quicksand-font text-gray-700 dark:text-gray-200">
          What People Say <span className="xl:block">About Us</span>
        </h2>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          We continually experiment. We fail quickly and productively. We use
          data and feedback to guide our course.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
