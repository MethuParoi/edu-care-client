const SearchSection = () => {
  return (
    <div className="w-full mt-10 flex justify-between items-center bg-gray-200 p-2 rounded-[2rem] h-16">
      <div>
        <input
          className="w-[200px] h-12 bg-gray-200 px-5 outline-none"
          type="text"
          placeholder="Search Your Desired Room"
        />
      </div>

      <button className="h-full w-[120px] lg:w-[150px] bg-red-400 hover:bg-red-500 rounded-[1.8rem] text-white font-semibold">
        Search Now
      </button>
    </div>
  );
};

export default SearchSection;
