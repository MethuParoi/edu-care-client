import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import slide1 from "../../assets/hero/sc-0.webp";
import slide2 from "../../assets/hero/sc-1.jpeg";
import slide3 from "../../assets/hero/sc-2.jpg";

const Slider = () => {
  const [page, setPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const displayedSlides = [slide1, slide2, slide3];

  useEffect(() => {
    const int = setInterval(() => {
      setPage((prev) => (prev + 1 >= displayedSlides.length ? 0 : prev + 1));
      setMobilePage((prev) =>
        prev + 1 >= displayedSlides.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(int);
  }, [displayedSlides.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 < 0 ? displayedSlides.length - 1 : prev - 1));
    setMobilePage((prev) =>
      prev - 1 < 0 ? displayedSlides.length - 1 : prev - 1
    );
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1 >= displayedSlides.length ? 0 : prev + 1));
    setMobilePage((prev) =>
      prev + 1 >= displayedSlides.length ? 0 : prev + 1
    );
  };

  return (
    <section className="grid lg:grid-rows-5">
      <div className="lg:row-span-3">
        <div className="relative h-[25rem] w-full">
          {/* Desktop */}
          <div className="hidden md:block">
            <img
              src={displayedSlides[page]}
              alt={`Slide ${page + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <div
              onClick={handlePrevPage}
              className="z-10 absolute bottom-1/2 -left-5 md:left-10"
            >
              <button className="bg-gray-800 bg-opacity-60 text-white p-3 rounded-full flex justify-center items-center">
                <FaAngleLeft size={20} />
              </button>
            </div>

            <div
              onClick={handleNextPage}
              className="z-10 absolute bottom-1/2 -right-5 md:right-10"
            >
              <button className="bg-gray-800 bg-opacity-60 text-white p-3 rounded-full flex justify-center items-center">
                <FaAngleRight size={20} />
              </button>
            </div>
          </div>
          {/* Mobile */}
          {isMobile && (
            <div className="block w-[320px] sm:w-full md:hidden">
              <img
                src={displayedSlides[mobilePage]}
                alt={`Slide ${mobilePage + 1}`}
                className="inset-0 w-full h-[250px] object-cover rounded-lg"
                loading="lazy"
              />
              <div
                onClick={handlePrevPage}
                className="z-10 absolute top-32 left-4"
              >
                <button className="bg-gray-800 bg-opacity-60 text-white p-2 rounded-full flex justify-center items-center">
                  <FaAngleLeft size={13} />
                </button>
              </div>

              <div
                onClick={handleNextPage}
                className="z-10 absolute top-32 right-4"
              >
                <button className="bg-gray-800 bg-opacity-60 text-white p-2 rounded-full flex justify-center items-center">
                  <FaAngleRight size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
