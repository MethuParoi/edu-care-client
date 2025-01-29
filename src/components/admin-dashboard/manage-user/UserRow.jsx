import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UserRow = ({
  username,
  email,
  subscription_status,
  userid,
  user_role,
  plan,
  setLoading,
  refetch,
}) => {
  const [Role, setRole] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (id, role) => {
    axiosSecure.patch(`/user/make-admin/${id}`, { Role: role }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        toast.success("Role changed successfully!");
        refetch();
      }
    });
  };

  const handleDeleteUser = (id) => {
    axiosSecure.delete(`/user/delete-user/${id}`).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        toast.success("User deleted successfully!");
        refetch();
      }
    });
  };

  return (
    <div className="grid grid-cols-4 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {username}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {email}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        <button
          onClick={() => {
            handleDeleteUser(userid);
            setLoading(true);
          }}
          className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
        >
          Delete
        </button>
      </p>

      <div className="flex space-x-4">
        <details className="dropdown">
          <summary className="btn m-1">{user_role}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <button
                disabled={user_role === "admin"}
                onClick={() => {
                  //   setRole("admin");
                  handleMakeAdmin(userid, "admin");
                  setLoading(true);
                }}
                className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
              >
                Admin
              </button>
            </li>
            <li>
              <button
                disabled={user_role === "moderator"}
                onClick={() => {
                  //   setRole("moderator");
                  handleMakeAdmin(userid, "moderator");
                  setLoading(true);
                }}
                className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
              >
                Moderator
              </button>
            </li>
            <li>
              <button
                disabled={user_role === "user"}
                onClick={() => {
                  //   setRole("user");
                  handleMakeAdmin(userid, "user");
                  setLoading(true);
                }}
                className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
              >
                Admin
              </button>
            </li>
          </ul>
        </details>
        {/* <button
          disabled={user_role === "admin"}
          onClick={() => {
            handleMakeAdmin(userid);
            setLoading(true);
          }}
          className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
        >
          {user_role === "admin" ? "Admin" : "Make Admin"}
        </button> */}
      </div>
    </div>
  );
};

export default UserRow;
