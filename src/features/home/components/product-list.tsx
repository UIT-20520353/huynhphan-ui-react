import ProductCard from "@/components/common/product-card";
import { TCategory } from "@/types/category";
import { TProduct } from "@/types/product";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductListProps {
  title: string;
  products: TProduct[];
  category: TCategory;
}

const ProductList: React.FunctionComponent<ProductListProps> = ({
  title,
  products,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start w-full gap-4">
      <div className="flex items-center justify-between w-full h-16 pl-5 rounded-lg bg-green-1">
        <p className="text-2xl font-bold text-white uppercase">{title}</p>
        <Button
          className="text-base font-medium !bg-green-1 hover:opacity-70 w-32 h-10 duration-300"
          type="primary"
          onClick={() => navigate(`/category/${category.id}`)}
        >
          Xem tất cả
        </Button>
      </div>
      <div className="grid w-full grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={`product-card-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
