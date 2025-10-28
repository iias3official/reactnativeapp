import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: true }),

  updateUser: (userData) =>
    set((state) => ({
      user: { ...state.user, ...userData },
    })),

  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useUserStore;
