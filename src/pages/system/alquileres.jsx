import React from "react";
import { Link } from "react-router-dom";
import useUserStore from "../../store/userStore"; // Asegúrate de importar tu store correctamente

import Navbar from "../../components/navbar";
import Filter from "../../components/filter";
import Switcher from "../../components/switcher";

import { FiMapPin } from "../../assets/icons/vander";

export default function Alquileres() {
  const { packages, filteredPackages } = useUserStore((state) => ({
    packages: state.packages,
    filteredPackages: state.filteredPackages,
  }));

  const displayedPackages =
    filteredPackages.length > 0 ? filteredPackages : packages;

  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={true}
        manuclass="justify-end nav-light"
      />

      <section className="relative table w-full items-center py-24 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
              Alquiler de Espacios Fisicos
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Inicio</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Alquiler de Espacios Fisicos
            </li>
          </ul>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <Filter />

            <div className="col-span-12 lg:col-span-9">
              <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
                {displayedPackages.map((item, index) => {
                  return (
                    <div
                      className="group border-2 rounded-md shadow dark:shadow-gray-700"
                      key={index}
                    >
                      <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                        <Link to={`/alquiler/${item.id}`}>
                          <img
                            src={item.image}
                            className="scale-125 group-hover:scale-100 duration-500 h-36"
                            alt=""
                          />
                        </Link>
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
                            className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"
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
                        <div className="w-full h-12">
                          <Link
                            to={`/alquiler/${item.id}`}
                            className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out line-clamp-2"
                          >
                            {item.title}
                          </Link>
                        </div>

                        <div className="flex items-center mt-2">
                          <span className="text-slate-400">Puntuación:</span>
                          <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                            {[...Array(5)].map((_, index) => (
                              <li key={index} className="inline">
                                <i className="mdi mdi-star align-middle"></i>
                              </li>
                            ))}
                            <li className="inline text-black dark:text-white text-sm">
                              5.0(30)
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                          <h5 className="text-md font-medium text-red-500">
                            {item.amount} pts por hora
                          </h5>

                          <Link
                            to="/alquiler/16841-16851-68"
                            className="text-slate-400 hover:text-red-500"
                          >
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
        </div>
      </section>
      <Switcher />
    </>
  );
}
