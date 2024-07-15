import { TCategory } from "./category";

export type TProduct = {
  name: string;
  detailImages: string[];
  price: number;
  image: string;
  category: TCategory;
};
