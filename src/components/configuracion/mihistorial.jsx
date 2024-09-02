import React from "react";
import { packages } from "../../data/data";
import { FiEye, FiSearch } from "react-icons/fi";

export const Mihistorial = () => {
  //Cortar titulos largos
  const cutTittle = (title, maxLength = 33) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  return (
    <>
      <div className="lg:w-3/4 md:w-2/3 md:px-1 mt-6 md:mt-0">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <h5 className="text-lg font-semibold mb-4">Mi Historial:</h5>
            </div>

            <div className="relative">
              <div className="absolute top-5 left-3">
                <FiSearch></FiSearch>
              </div>
              <form>
                <input
                  type="text"
                  className="h-14 w-full pl-10 pr-20 rounded-lg z-0 shadow focus:shadow-red-500 transition duration-300 focus:outline-none"
                  placeholder="Buscar..."
                />
                <div className="absolute top-2 right-2">
                  <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
            <table className="w-full text-center text-slate-500 dark:text-slate-400">
              <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th scope="col" className="text-center px-2 py-0">
                    No.
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Lugar
                  </th>
                  <th scope="col" className="text-center px-6 py-3 w-20">
                    Tipo
                  </th>
                  <th scope="col" className="text-center px-6 py-3 w-28">
                    Precio
                  </th>
                  <th scope="col" className="text-center px-2 py-3 w-20">
                    Detalles
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.slice(0, 6).map((pkg, index) => (
                  <tr key={pkg.id} className="bg-white dark:bg-slate-900">
                    <td className="text-center px-1 py-0">{index + 1}</td>
                    <th
                      scope="row"
                      className="text-start px-3 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {cutTittle(pkg.title)}
                    </th>
                    <td className="text-center px-3 py-4">{pkg.place}</td>
                    <td className="text-center px-3 py-4">{pkg.type}</td>
                    <td className="text-center px-3 py-4">{pkg.amount}</td>
                    <td className="text-center px-1 py-6 flex justify-center items-center">
                      <FiEye className="size-4 hover:text-red-500 active:text-red-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
