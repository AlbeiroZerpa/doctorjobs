import create from 'zustand';

const useUserStore = create((set) => ({
  user: null,

  // Acción para loguear al usuario
  login: ( data ) => set({ user: data }),

  // Acción para desloguear al usuario
  logout: () => set({ user: null }),

  // Acción para agregar puntos al usuario
  addPoints: (points) =>
    set((state) => ({
      user: state.user ? { ...state.user, points: state.user.points + points } : null,
    })),
}));

export default useUserStore;