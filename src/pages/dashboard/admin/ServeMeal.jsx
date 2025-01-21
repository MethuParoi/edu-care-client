import React from "react";
import UserRow from "../../../components/admin-dashboard/manage-user/UserRow";
import { useFetchAllUser } from "../../../utils/fetchUsers";

const ServeMeal = () => {
  const { isLoading, allUser, error, refetch } = useFetchAllUser();
  return (
    <div className="mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
        Serve Meals
      </h1>
      {!isLoading && allUser?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
          No User found!
        </h2>
      )}
      {/* table */}
      {allUser?.length > 0 && (
        <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
          <div className="grid grid-cols-4 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
            <p className="text-lg xl:text-xl  font-semibold text-gray-300">
              User Name
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              User Email
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Subscription Status
            </p>
          </div>

          <div className="">
            {allUser.map((user) => (
              <UserRow
                key={user._id}
                username={user.name}
                email={user.email}
                subscription_status={user.subscription_status}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServeMeal;
