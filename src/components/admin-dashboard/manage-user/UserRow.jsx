// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";

// const UserRow = ({
//   username,
//   email,
//   subscription_status,
//   userid,
//   user_role,
//   plan,
//   setLoading,
//   refetch,
// }) => {
//   const axiosSecure = useAxiosSecure();

//   const handleMakeAdmin = (id) => {
//     axiosSecure.patch(`/user/make-admin/${id}`).then((res) => {
//       setLoading(false);
//       if (res.status === 200) {
//         toast.success("Admin made successfully!");
//         refetch();
//       }
//     });
//   };

//   return (
//     <div className="grid grid-cols-4 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {username}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {email}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {plan}
//       </p>

//       <div className="flex space-x-4">
//         <button
//           disabled={user_role === "admin"}
//           onClick={() => {
//             handleMakeAdmin(userid);
//             setLoading(true);
//           }}
//           className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
//         >
//           {user_role === "admin" ? "Admin" : "Make Admin"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserRow;
