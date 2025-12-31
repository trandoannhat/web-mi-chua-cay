import { create } from "zustand";

type AuthState = {
  user: any | null;
  token: string | null;
};

export const useAuthStore = create<AuthState>(() => ({
  user: null,
  token: null,
}));
