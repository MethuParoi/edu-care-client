import { Outlet } from "react-router-dom";
import Drawer from "../components/dashboard/Drawer";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-50">
      <Helmet>
        <title>CloudHostel | Dashboard</title>
      </Helmet>
      {/* dashboard sidebar */}
      <Drawer />
      <div className="w-[100%] md:flex-1">
        {/* dashboard content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
