import image_1 from "@/assets/images/carousel/1.jpg";
import image_2 from "@/assets/images/carousel/2.jpg";
import image_3 from "@/assets/images/carousel/3.jpg";
import { decals, homeProducts, printMachines } from "@/data/product";
import { TCarouselItem } from "@/types/carousel";
import { Carousel } from "antd";
import React, { useMemo } from "react";
import ProductList from "./components/product-list";
import { categories } from "@/data/category";

const HomePage: React.FC = () => {
  const carouselItems = useMemo(
    (): TCarouselItem[] => [
      { image: image_1 },
      { image: image_2 },
      { image: image_3 },
    ],
    []
  );

  return (
    <div className="w-full">
      <div className="w-full">
        <Carousel
          className="border-0 outline-none"
          autoplaySpeed={3000}
          arrows
          autoplay
          draggable
          infinite
        >
          {carouselItems.map((item, index) => (
            <div
              key={`carousel-item-${index}`}
              className="w-full h-[70vh] max-w-full max-h-[70vh] outline-none"
            >
              <img
                className="object-cover object-center w-full outline-none"
                alt="image-1"
                src={item.image}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col items-start w-full gap-10 px-32 mt-4 2xl:px-40">
        <ProductList
          title="Mực in nhãn mã vạch"
          products={homeProducts}
          category={categories[2]}
        />
        <ProductList title="Decal" products={decals} category={categories[3]} />
        <ProductList
          title="Máy in mã vạch"
          products={printMachines}
          category={categories[4]}
        />
      </div>
    </div>
  );
};

export default HomePage;
