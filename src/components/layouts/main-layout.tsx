import Header from "@/components/common/header";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Navbar />
      <div className="w-full min-h-[calc(100vh-88px-64px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
