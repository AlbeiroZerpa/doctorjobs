import create from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,

      // Acción para loguear al usuario
      login: (data) => set({ user: data }),

      // Acción para desloguear al usuario
      logout: () => set({ user: null }),

      // Acción para agregar puntos al usuario
      addPuntos: (nuevosPuntos) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, puntos: state.user.puntos + nuevosPuntos }
            : null,
        })),
        removePuntos: (puntosARestar) =>
          set((state) => ({
            user: state.user
              ? { ...state.user, puntos: state.user.puntos - puntosARestar }
              : null,
          })),        
    }),
    {
      name: 'user-storage', // Nombre de la clave en localStorage
      getStorage: () => localStorage, // Usar localStorage para la persistencia
    }
  )
);

export default useUserStore;
