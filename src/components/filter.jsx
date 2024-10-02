import React, { useEffect, useState } from "react";
import useUserStore from "../store/userStore";

export default function Filter() {
  const {
    packages,
    filteredPackages,
    filterPackages,
    resetFilter,
    getDistinctCities,
    getDistinctTypes,
    getDistinctFeatures,
  } = useUserStore();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [checkedCities, setCheckedCities] = useState({});
  const [checkedTypes, setCheckedTypes] = useState({});
  const [checkedFeatures, setCheckedFeatures] = useState({});

  const changeMinValue = (e) => {
    setMinValue(e.target.value);
  };

  const changeMaxValue = (e) => {
    setMaxValue(e.target.value);
  };

  const applyFilter = () => {
    if (minValue > maxValue) {
      alert("El valor mínimo no puede ser mayor que el valor máximo");
      return;
    }

    const selectedFeatures = Object.keys(checkedFeatures).filter(
      (feature) => checkedFeatures[feature]
    );

    filterPackages(
      selectedCity,
      selectedType,
      minValue,
      maxValue,
      selectedFeatures
    );
  };

  useEffect(() => {
    if (filteredPackages.length === 0) {
      alert("No se encontraron resultados");
    }
  }, [filteredPackages]);

  const applyResetFilter = () => {
    resetFilter();
    setMinValue(0);
    setMaxValue(100);
    setSelectedCity([]);
    setSelectedType([]);
    setCheckedCities({});
    setCheckedTypes({});
    setCheckedFeatures({});
  };

  const cities = getDistinctCities();
  const types = getDistinctTypes();
  const features = getDistinctFeatures(); // Obtener features distintos

  const countPackagesByCity = (city) => {
    return packages.filter((pkg) => pkg.place === city).length;
  };

  const handleCityCheckboxChange = (city) => {
    setCheckedCities((prev) => ({
      ...prev,
      [city]: !prev[city],
    }));

    setSelectedCity((prev) => {
      if (prev.includes(city)) {
        return prev.filter((c) => c !== city);
      } else {
        return [...prev, city];
      }
    });
  };

  const handleTypeCheckboxChange = (type) => {
    setCheckedTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));

    setSelectedType((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const handleFeatureCheckboxChange = (feature) => {
    setCheckedFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };
  

  useEffect(() => {
    resetFilter();
  }, [resetFilter]);

  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
        <div>
          <h5 className="text-lg font-medium">Filtrar Créditos</h5>

          <div className="range-slider mt-3">
            <span className="flex justify-between pb-2">
              <span>
                <input
                  type="number"
                  className="text-slate-400"
                  value={minValue}
                  min={0}
                  max={500}
                  onChange={changeMinValue}
                />
              </span>

              <span>
                <input
                  type="number"
                  className="text-slate-400"
                  value={maxValue}
                  min={0}
                  max={500}
                  onChange={changeMaxValue}
                />
              </span>
            </span>
            <input
              value={minValue}
              min={0}
              max={500}
              step="5"
              type="range"
              onChange={changeMinValue}
            />
            <input
              value={maxValue}
              min={0}
              max={500}
              step="5"
              type="range"
              onChange={changeMaxValue}
            />
          </div>
        </div>

        <div className="mt-6">
          <h5 className="text-lg font-medium">Ciudades</h5>
          <div className="mt-3">
            {cities.map((city) => (
              <div className="flex items-center mb-0" key={city}>
                <input
                  className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                  type="checkbox"
                  value={city}
                  id={city}
                  checked={checkedCities[city] || false}
                  onChange={() => handleCityCheckboxChange(city)}
                />
                <label
                  className="form-checkbox-label text-slate-400"
                  htmlFor={city}
                >
                  {city} ({countPackagesByCity(city)})
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h5 className="text-lg font-medium">Inmueble</h5>
          <div className="mt-3">
            {types.map((type) => (
              <div className="flex items-center mb-0" key={type}>
                <input
                  className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                  type="checkbox"
                  value={type}
                  id={type}
                  checked={checkedTypes[type] || false}
                  onChange={() => handleTypeCheckboxChange(type)}
                />
                <label
                  className="form-checkbox-label text-slate-400"
                  htmlFor={type}
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h5 className="text-lg font-medium">Features</h5>
          <div className="mt-3">
            {features.map((feature) => (
              <div className="flex items-center mb-0" key={feature}>
                <input
                  className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                  type="checkbox"
                  id={feature}
                  checked={checkedFeatures[feature] || false}
                  onChange={() => handleFeatureCheckboxChange(feature)}
                />
                <label
                  className="form-checkbox-label text-slate-400"
                  htmlFor={feature}
                >
                  {feature}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <button
            onClick={applyFilter}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Aplicar Filtro
          </button>

          <button
            onClick={applyResetFilter}
            className="mt-4 p-2 bg-red-500 text-white rounded"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
