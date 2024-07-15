import transparentLogo from "@/assets/images/logo-removebg.png";
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between p-3 px-32 2xl:px-40">
        <Link to="/">
          <img
            src={transparentLogo}
            alt="logo"
            className="h-12 cursor-pointer 2xl:h-16"
          />
        </Link>
        <div className="flex items-center gap-3 px-4 py-2 duration-300 border border-gray-200 rounded-full focus-within:border-gray-400 hover:border-gray-400">
          <Search size={16} color="#212529" />
          <input
            name="search"
            placeholder="Tìm kiếm sản phẩm"
            className="h-6 text-sm bg-transparent border-0 outline-none w-72 text-black-1"
            autoComplete="off"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
