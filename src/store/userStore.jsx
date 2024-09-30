import create from "zustand";
import { persist } from "zustand/middleware";
import { packages } from "../data/data";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      packages: packages,
      filteredPackages: [], // Estado para los packages filtrados
      selectedFeatures: [], // Estado para los features seleccionados

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

      verificacionUser: () =>
        set((state) => ({
          user: state.user ? { ...state.user, verificacion: true } : null,
        })),

      // Acción para filtrar los packages según el lugar, tipo y features
      filterPackages: (places, type, minValue, maxValue, features) =>
        set({
          filteredPackages: packages.filter(
            (pkg) =>
              (!places.length || places.includes(pkg.place)) &&
              (!type.length || type.includes(pkg.type)) &&
              pkg.amount >= minValue &&
              pkg.amount <= maxValue &&
              (!features.length ||
                features.every((feature) =>
                  pkg.features.some(
                    (pkgFeature) =>
                      pkgFeature.name === feature && pkgFeature.title === "Sí"
                  )
                ))
          ),
        }),
      

      // Resetear el filtro
      resetFilter: () =>
        set({ filteredPackages: packages, selectedFeatures: [] }),

      // Obtener ciudades distintas de todos los packages
      getDistinctCities: () => {
        const cities = get().packages.map((pkg) => pkg.place);
        return [...new Set(cities)];
      },

      // Obtener tipos de packages distintos
      getDistinctTypes: () => {
        const types = get().packages.map((pkg) => pkg.type);
        return [...new Set(types)];
      },

      getDistinctFeatures: () => {
        const packages = get().packages || []; // Asegúrate de que "packages" siempre sea un array
        const features = packages.flatMap((pkg) => pkg.features?.map((feature) => feature.name) || []); // Verifica si "features" existe antes de usar "map"
        return [...new Set(features)];
      },

      // Obtener ciudades distintas de los packages filtrados
      getFilteredCities: () => {
        const cities = get().filteredPackages.map((pkg) => pkg.place);
        return [...new Set(cities)];
      },
    }),
    {
      name: "user-storage", // Nombre de la clave en localStorage
      getStorage: () => localStorage, // Usar localStorage para la persistencia
    }
  )
);

export default useUserStore;
