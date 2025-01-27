import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[320px] sm:w-full mt-10 flex justify-between items-center bg-gray-200 p-2 rounded-[2rem] h-16">
      <div>
        <input
          className="w-[100px] sm:w-[300px] h-12 bg-gray-200 px-5 outline-none"
          type="text"
          placeholder="Search Your Desired Scholarship"
        />
      </div>

      <button
        onClick={() => navigate("/all-meals")}
        className="h-full w-[120px] lg:w-[150px] bg-red-400 hover:bg-red-500 rounded-[1.8rem] text-white font-semibold"
      >
        Search Now
      </button>
    </div>
  );
};

export default SearchSection;
