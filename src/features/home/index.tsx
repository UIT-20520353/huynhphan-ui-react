import image_1 from "@/assets/images/carousel/1.jpg";
import image_2 from "@/assets/images/carousel/2.jpg";
import image_3 from "@/assets/images/carousel/3.jpg";
import { TCarouselItem } from "@/types/carousel";
import { Carousel } from "antd";
import React, { useMemo } from "react";
import { products } from "@/data/product";
import ProductCard from "@/components/common/product-card";

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
    <div className="mt-4">
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

      <div className="w-full mt-4">
        {products.map((product, index) => (
          <ProductCard key={`product-card-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
