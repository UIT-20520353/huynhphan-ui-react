import { images } from "@/assets/images";
import { categories } from "@/data/category";
import { TProduct } from "@/types/product";

export const products: TProduct[] = [
  {
    id: 1,
    name: "WAX S245",
    detailImages: [images.waxS245],
    price: 130000,
    image: images.waxS245,
    category: categories[0],
  },
  {
    id: 2,
    name: "Mực in mã vạch Wax Resin 110mm x 300m",
    detailImages: [images.waxResin],
    price: 0,
    image: images.waxResin,
    category: categories[0],
  },
];

export const homeProducts: TProduct[] = [
  {
    id: 3,
    name: "MỰC IN MÃ VẠCH 2 LÕI (80MMX100M)",
    detailImages: [],
    price: 50000,
    image: images.mucIn80x100,
    category: categories[2],
  },
  {
    id: 4,
    name: "MỰC IN MÃ VẠCH 2 LÕI 110MMX75M",
    detailImages: [],
    price: 50000,
    image: images.mucIn80x100,
    category: categories[2],
  },
  {
    id: 5,
    name: "MỰC IN NHÃN MÃ VẠCH WAX 110MM X 100M",
    detailImages: [],
    price: 60000,
    image: images.VS3EC,
    category: categories[2],
  },
  {
    id: 6,
    name: "MỰC IN MÃ VẠCH WAX TV21 (80X300M)",
    detailImages: [],
    price: 100000,
    image: images.mucIn80x300,
    category: categories[2],
  },
  {
    id: 7,
    name: "MỰC MÁY IN DATE CẦM TAY 25.4MM DT110",
    detailImages: [],
    price: 2000000,
    image: images.mayinDate,
    category: categories[2],
  },
];

export const decals: TProduct[] = [
  {
    id: 8,
    name: "DECAL PVC NHỰA TỔNG HỢP",
    detailImages: [],
    price: 0,
    image: images.Y4KI8,
    category: categories[3],
  },
  {
    id: 9,
    name: "TEM DECAL NHIỆT 40X30X900 TEM",
    detailImages: [],
    price: 60000,
    image: images.decal40x30x900,
    category: categories[3],
  },
  {
    id: 10,
    name: "DECAL 60X30X50M",
    detailImages: [],
    price: 70000,
    image: images.decal60x30x50,
    category: categories[3],
  },
];

export const printMachines: TProduct[] = [
  {
    id: 11,
    name: "MÁY IN TEM NHÃN MÃ VẠCH ZYWELL ZY909 (USB,LAN)",
    detailImages: [],
    price: 0,
    image: images.mayinzy909,
    category: categories[4],
  },
  {
    id: 12,
    name: "MÁY IN MÃ VẠCH MAXCODE M9 (USB) - MÁY IN ĐƠN VẬN CHUYỂN",
    detailImages: [],
    price: 1400000,
    image: images.mayinMaxcodeM9,
    category: categories[4],
  },
  {
    id: 13,
    name: "MÁY IN MÃ VẠCH XPRINTER A6 (USB)",
    detailImages: [],
    price: 1400000,
    image: images.mayinXprinterA6,
    category: categories[4],
  },
  {
    id: 14,
    name: "MÁY IN TEM NHÃN, MÃ VẠCH XPRINTER 365B",
    detailImages: [],
    price: 1600000,
    image: images.mayinXprinter365B,
    category: categories[4],
  },
];
