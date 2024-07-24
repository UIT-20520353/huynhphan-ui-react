import React from "react";
import { Map, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-10">
      <div className="w-full h-40 px-32 py-8 bg-green-2 2xl:px-40">
        <div className="flex flex-col items-start gap-2">
          <span className="text-base font-semibold text-white">
            Công ty TNHH Huỳnh Phan
          </span>
          <div className="flex items-center gap-2">
            <Map size={16} color="#fff" />
            <span className="text-sm text-white">
              Trụ sở chính: 51 Nguyễn Văn Lượng, phường 17, quận Gò Vấp, Tp.HCM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} color="#fff" />
            <span className="text-sm text-white">xuanvuong@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-20 px-32 bg-green-3 2xl:px-40">
        <span className="text-xs font-normal text-white">
          Công ty TNHH Huỳnh Phan
        </span>
        <span className="text-xs font-normal text-white">
          Copyrights © 2023. All Rights Reserved.
        </span>
        <p className="text-xs font-normal text-white">
          Thiết kế và phát triển
          <span className="text-yellow-1"> Công ty TNHH Huỳnh Phan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
