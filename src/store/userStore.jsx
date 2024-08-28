import create from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  login: (name) => set({ user: { name, points: 0 } }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
