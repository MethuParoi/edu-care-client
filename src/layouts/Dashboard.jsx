import { Outlet } from "react-router-dom";
import Drawer from "../components/dashboard/Drawer";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <Drawer />
      <div className="flex-1">
        {/* dashboard content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
