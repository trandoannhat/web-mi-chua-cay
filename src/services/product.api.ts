import type { Product } from "../types/product";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Mi Chuta Special",
    price: 12,
    imageUrl: "https://picsum.photos/400/300?1",
    category: "Noodle",
  },
  {
    id: 2,
    name: "Pho Beef",
    price: 10,
    imageUrl: "https://picsum.photos/400/300?2",
    category: "Pho",
  },
  {
    id: 3,
    name: "Banh Mi",
    price: 6,
    imageUrl: "https://picsum.photos/400/300?3",
    category: "Bread",
  },
];

export const productApi = {
  getAll: async () => {
    return Promise.resolve(mockProducts);
  },
};
