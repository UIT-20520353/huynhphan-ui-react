import { TProduct } from "@/types/product";
import React from "react";

interface IProductCardProps {
  product: TProduct;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  product,
}) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
