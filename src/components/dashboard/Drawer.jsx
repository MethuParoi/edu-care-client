import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdFastfood, MdFoodBank, MdOutlineRateReview } from "react-icons/md";
import { FaHistory, FaUserFriends } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const Drawer = () => {
  //TODO: fetch is admin from the server
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "bg-blue-700" : "";
  };

  return (
    <div className="drawer md:drawer-open  absolute top-0 left-0 md:relative md:w-[300px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button md:hidden absolute top-4 left-4"
        >
          <GiHamburgerMenu className="text-2xl text-red-300" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#3282B8] text-gray-300 font-semibold text-xl min-h-full w-72 p-4">
          {/* Sidebar content here */}
          <>
            <li className="flex items-center justify-center">
              <img className="w-32 h-28" src={logo} alt="logo" />
              <p className="text-3xl mt-[-25px] mb-5 text-accentHover">
                Cloud Hostel
              </p>
            </li>
          </>
          {isAdmin ? (
            // admin menubar
            <>
              <li className={getLinkClass("/admin/dashboard/admin-profile")}>
                <div className="flex items-center justify-start gap-x-4">
                  <CgProfile className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/admin-profile">Admin Profile</Link>
                </div>
              </li>
              <li className={getLinkClass("/admin/dashboard/manage-users")}>
                <div className="flex items-center justify-start gap-x-4">
                  <FaUserFriends className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/manage-users">Manage Users</Link>
                </div>
              </li>
              <li className={getLinkClass("/admin/dashboard/add-meal")}>
                <div className="flex items-center justify-start gap-x-4">
                  <IoIosAddCircleOutline className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/add-meal">Add Meal</Link>
                </div>
              </li>
              <li className={getLinkClass("/admin/dashboard/all-meals")}>
                <div className="flex items-center justify-start gap-x-4">
                  <MdFastfood className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/all-meals">All Meals</Link>
                </div>
              </li>
              <li className={getLinkClass("/admin/dashboard/all-reviews")}>
                <div className="flex items-center justify-start gap-x-4">
                  <MdOutlineRateReview className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/all-reviews">All Reviews</Link>
                </div>
              </li>
              <li className={getLinkClass("/admin/dashboard/serve-meals")}>
                <div className="flex items-center justify-start gap-x-4">
                  <MdFoodBank className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/serve-meals">Serve Meals</Link>
                </div>
              </li>
              <li className={getLinkClass("/admin/dashboard/upcoming-meals")}>
                <div className="flex items-center justify-start gap-x-4">
                  <PiBowlFood className="text-red-300 text-3xl" />
                  <Link to="/admin/dashboard/upcoming-meals">
                    Upcoming Meals
                  </Link>
                </div>
              </li>
            </>
          ) : (
            // user menubar
            <>
              <li className={getLinkClass("/dashboard/my-profile")}>
                <div className="flex items-center justify-start gap-x-4">
                  <CgProfile className="text-red-300 text-3xl" />
                  <Link to="/dashboard/my-profile">My Profile</Link>
                </div>
              </li>
              <li className={getLinkClass("/dashboard/requested-meals")}>
                <div className="flex items-center justify-start gap-x-4">
                  <MdFastfood className="text-red-300 text-3xl" />
                  <Link to="/dashboard/requested-meals">Requested Meals</Link>
                </div>
              </li>
              <li className={getLinkClass("/dashboard/my-reviews")}>
                <div className="flex items-center justify-start gap-x-4">
                  <MdOutlineRateReview className="text-red-300 text-3xl" />
                  <Link to="/dashboard/my-reviews">My Reviews</Link>
                </div>
              </li>
              <li className={getLinkClass("/dashboard/payment-history")}>
                <div className="flex items-center justify-start gap-x-4">
                  <FaHistory className="text-red-300 text-3xl" />
                  <Link to="/dashboard/payment-history">Payment History</Link>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
