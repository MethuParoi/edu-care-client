import { CiCalendarDate } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaBangladeshiTakaSign, FaRegStarHalfStroke } from "react-icons/fa6";

function ScholarshipCard({ university }) {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate(`/scholarship-details/${university._id}`);
  };
  return (
    <div
      className={`card bg-base-100 dark:bg-gray-700 w-80 xl:w-64 shadow-xl `}
    >
      <figure>
        <img
          className="w-full h-60 object-cover"
          src={university?.universityLogo}
          alt="spot"
        />
      </figure>
      <div className="card-body px-2 py-5">
        <h2 className="card-title line-clamp-1">{university.universityName}</h2>
        <div className="flex items-center justify-center mt-1">
          <div className="badge badge-secondary bg-green-200 border-transparent text-sm line-clamp-1 text-gray-800">
            {university.scholarshipCategory}
          </div>
          <div className="flex items-center gap-x-2 ml-2">
            <AiFillProduct className="text-xl" />
            <p className="text-gray-600 dark:text-white line-clamp-1">
              {university.subjectCategory}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around my-2">
          <div className="flex items-center gap-x-2">
            <FaBangladeshiTakaSign className="text-xl" />

            <p className="text-gray-600 dark:text-white">
              {university.applicationFees}
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <FaRegStarHalfStroke className="text-xl" />
            <p className="text-gray-600 dark:text-white">{university.rating}</p>
          </div>
        </div>

        <button
          onClick={() => {
            handleExplore();
            // setDetails(meal);
          }}
          className="w-[100%] h-12 bg-secondary hover:bg-teal-700 text-neutral dark:bg-gray-500 dark:hover:bg-gray-600 dark:text-white text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto mt-4"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default ScholarshipCard;
