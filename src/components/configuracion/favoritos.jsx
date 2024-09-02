import React from "react";
import { packages } from "../../data/data";
import { Link } from "react-scroll";
import { FiMapPin } from "react-icons/fi";

export const Favoritos = () => {
  return (
    <>
      <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          <h5 className="text-lg font-semibold mb-4">Favoritos:</h5>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {packages.slice(0, 6).map((item, index) => {
              return (
                <div
                  className="group rounded-md shadow dark:shadow-gray-700"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                    <img
                      src={item.image}
                      className="scale-125 group-hover:scale-100 duration-500"
                      alt=""
                    />
                    {item.tagText && (
                      <div className="absolute top-0 start-0 p-4">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                          {item.tagText}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-0 end-0 p-4">
                      <Link
                        to="#"
                        className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-red-500 dark:text-red-500 focus:text-slate-100 dark:focus:text-slate-100 hover:text-slate-100 dark:hover:text-slate-100"
                      >
                        <i className="mdi mdi-heart text-[20px] align-middle"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="flex items-center text-slate-400 font-medium mb-2">
                      <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                      {item.place}
                    </p>
                    <Link
                      to={`/tour-detail-one/${item.id}`}
                      className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>

                    <div className="flex items-center mt-2">
                      <span className="text-slate-400">Rating:</span>
                      <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline text-black dark:text-white text-sm">
                          5.0(30)
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">
                        58 / Día
                      </h5>

                      <Link to="" className="text-slate-400 hover:text-red-500">
                        Ver Ahora <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
