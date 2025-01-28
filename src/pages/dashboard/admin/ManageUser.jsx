// import { useState } from "react";
// import UserRow from "../../../components/admin-dashboard/manage-user/UserRow";
// import { useFetchAllUser } from "../../../utils/fetchUsers";
// import { IoSearch } from "react-icons/io5";
// import Loader from "../../../components/ui/Loader/Loader";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const ManageUser = () => {
//   const { isLoading, allUser, error, refetch } = useFetchAllUser();
//   const [filteredUser, setFilteredUser] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const axiosSecure = useAxiosSecure();

//   //implement server side search by user name amd email
//   const handleSearch = () => {
//     setLoading(true);
//     axiosSecure
//       .get("/user/search-users", { params: { query: search } })
//       .then((res) => {
//         setFilteredUser(res.data.users);
//         setLoading(false);
//       });
//   };
//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
//         Manage Users
//       </h1>
//       {/* search  */}
//       <div className="self-center flex items-center justify-center mb-8">
//         <input
//           className="border-2 border-gray-400 rounded-lg shadow-lg h-10 w-[250px] sm:w-[350px] px-2"
//           type="text"
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//           placeholder="Search for user"
//         />
//         <button
//           onClick={handleSearch}
//           className="h-10 w-14 bg-cyan-600 flex items-center justify-center ml-[-5px] rounded-r-lg hover:bg-cyan-700"
//         >
//           <IoSearch className="text-2xl text-gray-200" />
//         </button>
//       </div>
//       {/* loading state */}
//       {loading && (
//         <div className="absolute top-1/2 left-1/2">
//           <Loader />
//         </div>
//       )}
//       {!isLoading && allUser?.length === 0 && (
//         <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No User found!
//         </h2>
//       )}
//       {/* table */}
//       {allUser?.length > 0 && (
//         <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
//           <div className="grid grid-cols-4 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
//             <p className="text-lg xl:text-xl  font-semibold text-gray-300">
//               User Name
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               User Email
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Subscription Status
//             </p>
//           </div>

//           <div className="">
//             {filteredUser?.length > 0
//               ? filteredUser.map((user) => (
//                   <UserRow
//                     key={user._id}
//                     username={user.name}
//                     email={user.email}
//                     userid={user._id}
//                     user_role={user.role}
//                     plan={user.plan}
//                     setLoading={setLoading}
//                     subscription_status={user.subscription_status}
//                     refetch={refetch}
//                   />
//                 ))
//               : allUser.map((user) => (
//                   <UserRow
//                     key={user._id}
//                     username={user.name}
//                     email={user.email}
//                     userid={user._id}
//                     user_role={user.role}
//                     plan={user.plan}
//                     setLoading={setLoading}
//                     subscription_status={user.subscription_status}
//                     refetch={refetch}
//                   />
//                 ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageUser;
