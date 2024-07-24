import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center w-full h-16 px-32 2xl:px-40 bg-green-1">
      <Link
        className="flex items-center justify-center h-full px-3 text-base text-white duration-300 hover:bg-green-2"
        to="/"
      >
        Trang chủ
      </Link>
      <Link
        className="flex items-center justify-center h-full px-3 text-base text-white duration-300 hover:bg-green-2"
        to="/"
      >
        Giới thiệu
      </Link>
      <div className="relative flex items-center justify-center h-full px-3 text-white duration-300 group hover:bg-green-2">
        <div className="flex items-center gap-1">
          <span>Sản phẩm</span>
          <ChevronDown size={20} color="#fff" />
        </div>

        <div className="absolute top-16 left-0 hidden w-56 bg-white group-hover:flex z-[1000] rounded-b-md flex-col items-start overflow-hidden border border-t-0 border-green-2">
          <Link
            to="/category/3"
            className="flex items-center w-full h-10 px-3 text-sm font-normal duration-300 text-black-1 hover:text-white hover:bg-green-2"
          >
            Mực in nhãn mã vạch
          </Link>
          <Link
            to="/category/4"
            className="flex items-center w-full h-10 px-3 text-sm font-normal duration-300 text-black-1 hover:text-white hover:bg-green-2"
          >
            Decal
          </Link>
          <Link
            to="/category/5"
            className="flex items-center w-full h-10 px-3 text-sm font-normal duration-300 text-black-1 hover:text-white hover:bg-green-2"
          >
            Máy in mã vạch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
