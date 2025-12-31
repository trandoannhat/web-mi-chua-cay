import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface CartItem extends Product {
  qty: number;
}

interface CartStore {
  cart: CartItem[];
  add: (product: Product) => void;
  remove: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      // GÁN DỮ LIỆU MẪU TẠI ĐÂY
      cart: [
        {
          id: 1,
          name: "MÌ CHUA CAY HẢI SẢN",
          price: 65000,
          qty: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800",
          category: "Mì Chua Cay",
        },
        {
          id: 3,
          name: "BÁNH MÌ THỊT NƯỚNG GIÒN",
          price: 35000,
          qty: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800",
          category: "Bánh Mì",
        },
      ],

      add: (product) =>
        set((state) => {
          const ex = state.cart.find((i) => i.id === product.id);
          if (ex) {
            return {
              cart: state.cart.map((i) =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...product, qty: 1 }] };
        }),

      remove: (id) =>
        set((state) => ({
          cart: state.cart
            .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
            .filter((i) => i.qty > 0),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" } // Lưu vào LocalStorage
  )
);
