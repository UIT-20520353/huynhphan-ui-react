import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { homeProducts, decals, printMachines } from "@/data/product";
import { TProduct } from "@/types/product";
import { TCategory } from "@/types/category";
import { categories } from "@/data/category";
import ProductCard from "@/components/common/product-card";

const ProductListWithCategory: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productList, setProductList] = useState<TProduct[]>([]);
  const [category, setCategory] = useState<TCategory>({
    id: 3,
    name: "Mực in nhãn mã vạch",
  });

  useEffect(() => {
    if (!id) {
      navigate("/");
    } else {
      switch (Number(id)) {
        case 3:
          setProductList(homeProducts);
          setCategory(categories[2]);
          break;
        case 4:
          setProductList(decals);
          setCategory(categories[3]);
          break;
        case 5:
          setProductList(printMachines);
          setCategory(categories[4]);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="w-full px-32 mt-4 2xl:px-40">
      <div className="flex items-center justify-between w-full h-16 pl-5 rounded-lg bg-green-1">
        <p className="text-2xl font-bold text-white uppercase">
          {category.name}
        </p>
      </div>

      <div className="grid w-full grid-cols-4 gap-4 mt-4">
        {productList.map((product, index) => (
          <ProductCard key={`product-card-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListWithCategory;
