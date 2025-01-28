import { useContext, useEffect } from "react";
// import "./Profile.css";
import ProfileImageSection from "../../../components/user-dashboard/user-profile/ProfileImageSection";
import ProfileDesc from "../../../components/user-dashboard/user-profile/ProfileDesc";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../../provider/AuthProvider";
import { useFetchSingleUser } from "../../../utils/fetchUsers";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, singleUser, error, refetch } = useFetchSingleUser(
    user?.email
  );

  return (
    <div className=" w-full  text-red-300  ">
      <div className="flex items-center justify-between pt-5 px-5">
        <div className="flex items-center mt-5">
          <div>
            <CgProfile size={"2.5rem"} />
          </div>
          <div>
            <p className="text-[1.2rem] sm:text-[1.8rem] font-semibold pl-3">{`Welcome, ${
              singleUser?.role === "admin" ? "Admin" : user?.displayName
            }`}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-transparent m-12  rounded-[4rem] shadow-xl lg:h-[30rem] h-[35rem] w-[90%] bg-[#3282B8] backdrop-blur-[30px] justify-items-center items-center mx-auto mb-24">
        <div className="flex items-center justify-center ">
          <div className="">
            <ProfileImageSection profileImage={user?.photoURL} />
          </div>
        </div>

        <div className="md:col-span-2 self-center ml-[-15rem]">
          <ProfileDesc
            badge={singleUser?.plan}
            name={user?.displayName}
            mail={user?.email}
            role={singleUser?.role}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
