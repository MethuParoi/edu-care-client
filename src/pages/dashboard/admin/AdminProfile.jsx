// //NOT USED

// import { useContext } from "react";
// // import "./Profile.css";
// import ProfileImageSection from "../../../components/admin-dashboard/admin-profile/ProfileImageSection";
// import ProfileDesc from "../../../components/admin-dashboard/admin-profile/ProfileDesc";
// import { CgProfile } from "react-icons/cg";
// import { AuthContext } from "../../../provider/AuthProvider";

// const AdminProfile = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className=" w-full  text-red-300  ">
//       <div className="flex items-center justify-between pt-5 px-5">
//         <div className="flex items-center mt-5">
//           <div>
//             <CgProfile size={"2.5rem"} />
//           </div>
//           <div>
//             <p className="text-[1.2rem] sm:text-[1.8rem] font-semibold pl-3">{`Wcome, ${user?.displayName} (Admin)`}</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 border-transparent m-12  rounded-[4rem] shadow-xl lg:h-[30rem] h-[35rem] w-[90%] bg-[#3282B8] backdrop-blur-[30px] justify-items-center items-center mx-auto mb-24">
//         <div className="flex items-center justify-center ">
//           <div className="">
//             <ProfileImageSection profileImage={user?.photoURL} />
//           </div>
//         </div>

//         <div className="md:col-span-2 self-center ml-[-15rem]">
//           <ProfileDesc name={user?.displayName} mail={user?.email} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;
