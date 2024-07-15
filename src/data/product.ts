import { images } from "@/assets/images";
import { categories } from "@/data/category";
import { TProduct } from "@/types/product";

export const products: TProduct[] = [
  {
    name: "WAX S245",
    detailImages: [images.waxS245],
    price: 130000,
    image: images.waxS245,
    category: categories[0],
  },
  {
    name: "Mực in mã vạch Wax Resin 110mm x 300m",
    detailImages: [images.waxResin],
    price: 0,
    image: images.waxResin,
    category: categories[0],
  },
];
