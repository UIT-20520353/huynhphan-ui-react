import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { homeProducts, decals, printMachines } from "@/data/product";
import { TProduct } from "@/types/product";
import { Image } from "antd";
import { NumericFormat } from "react-number-format";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<TProduct | undefined | null>(
    undefined
  );

  useEffect(() => {
    if (!id) {
      navigate("/");
    } else {
      const hp = homeProducts.find((product) => product.id === Number(id));
      const d = decals.find((product) => product.id === Number(id));
      const pm = printMachines.find((product) => product.id === Number(id));

      if (!hp && !d && !pm) {
        setProduct(null);
      } else {
        setProduct(hp ?? d ?? pm);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return product === null ? (
    <Navigate to="/" />
  ) : (
    <div className="grid w-full grid-cols-12 px-32 mt-4 2xl:px-40">
      <div className="col-span-5">
        <Image src={product?.image ?? ""} alt="product" className="w-full" />
      </div>
      <div className="flex flex-col items-start col-span-7 gap-3 pl-8">
        <span className="text-3xl font-bold">{product?.name ?? "--"}</span>
        <span className="text-base">Trạng thái: Còn hàng</span>
        <span className="text-2xl font-medium text-red-1">
          Giá bán:{" "}
          {product?.price ? (
            <NumericFormat
              value={product.price}
              thousandSeparator=","
              suffix="₫"
              displayType="text"
            />
          ) : (
            "Liên hệ"
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;
