import { TProduct } from "@/types/product";
import { Image } from "antd";
import React from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

interface IProductCardProps {
  product: TProduct;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  product,
}) => {
  return (
    <div className="flex flex-col items-start w-full gap-2 p-4 duration-300 border border-gray-300 rounded-lg hover:border-green-1">
      <Image
        alt={product.name}
        src={product.image}
        className="object-cover object-center w-full max-h-80 min-h-80"
      />
      <span className="text-sm font-medium uppercase">{product.name}</span>
      <span className="text-sm font-normal text-red-1">
        <span>Giá: </span>
        {product.price > 0 ? (
          <NumericFormat
            value={product.price}
            suffix="₫"
            thousandSeparator=","
            displayType="text"
          />
        ) : (
          <span>Liên hệ</span>
        )}
      </span>
      <div className="flex items-center justify-center w-full">
        <Link
          to={`/product/${product.id}`}
          type="primary"
          className="!bg-green-1 flex items-center justify-center hover:opacity-70 duration-300 px-3 h-8 rounded-full text-base font-medium text-white"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
