import React from "react";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import Lottie from "lottie-react";
import DashboardAnimation from "../assets/Dashboard.json";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="md:flex mt-5">
        <Sidebar />
        <div className="flex-1">
          <div className="p-5">
            <Outlet />
          </div>
          {/* <div>
            <Lottie animationData={DashboardAnimation} />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
