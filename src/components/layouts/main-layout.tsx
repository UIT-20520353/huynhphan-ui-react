import Header from "@/components/common/header";
// import Navbar from "@/components/common/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
