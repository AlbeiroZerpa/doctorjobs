import React, { useState } from "react";
import { Link } from "react-router-dom";

import Switcher from "../../components/switcher";
import Client from "../../components/client";

import faqImg from "../../assets/images/bg/6.jpg";
import bg from "../../assets//images/bg/6.jpg";

import {
  FiVideo,
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiChevronDown,
  BsBuildings,
  LiaStopwatchSolid,
} from "../../assets/icons/vander";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import { Parallax } from "react-parallax";

import { faqData, packages } from "../../data/data";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default function IndexFour() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  let [isOpen, setOpen] = useState(false);
  let [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <section
        className="relative py-36  bg-cover jarallax"
        data-jarallax
        data-speed="0.5"
      >
        <Parallax
          bgImage={bg}
          bgImageAlt="the cat"
          strength={200}
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-6">
            <div className="lg:col-span-7">
              <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-2xl mb-6 mt-5">
                ¿Necesitas un Quirófano, <br></br>{" "}
                <i>Consultorio o Sala de Reunión? </i>{" "}
                <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-5">
                  <i>Tenemos el Espacio Ideal</i>
                </h4>
              </h4>
              <p className="text-white/70 text-xl max-w-xl">
                Reserva tu espacio médico de calidad en cualquier centro del
                país, equipado con la mejor tecnología y adaptado a tu
                presupuesto.
              </p>

              <div className="mt-6">
                <Link
                  to=""
                  className="py-2 px-5 inline-flex items-center tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                >
                  Ver Tutorial
                  <FiVideo className="ml-2"></FiVideo>
                </Link>
                <span className="font-semibold ms-1 align-middle"></span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 p-6 z-10 relative lg:ms-10">
                <h4 className="mb-5 text-2xl font-semibold">
                  Busca Tu Consultorio
                </h4>

                <form>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="form-label font-medium text-slate-900 dark:text-white">
                        ¿Qué buscas?
                      </label>
                      <div className="relative mt-2">
                        <FiUsers className="size-[18px] absolute top-[10px] start-3"></FiUsers>
                        <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                          <option disabled defaultValue>
                            ¿Qué buscas?
                          </option>
                          <option>Consultorio</option>
                          <option>Quirófano</option>
                          <option>Sala de reuniones</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label font-medium text-slate-900 dark:text-white">
                        Ciudad
                      </label>
                      <div className="relative mt-2">
                        <BsBuildings className="size-[18px] absolute top-[10px] start-3"></BsBuildings>
                        <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                          <option value="" disabled hidden selected>
                            Ciudad
                          </option>
                          <option>Todas</option>
                          <option>Guayaquil</option>
                          <option>Quito</option>
                          <option>Cuenca</option>
                          <option>Ambato</option>
                          <option>Riobamba</option>
                          <option>Durán</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label font-medium text-slate-900 dark:text-white">
                        Fecha de Reservación:
                      </label>
                      <div className="relative mt-2">
                        <FiCalendar className="size-[18px] absolute top-[10px] start-3 z-50"></FiCalendar>
                        <DatePicker
                          locale={es}
                          className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          wrapperClassName="w-full"
                        />
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="submit"
                        id="search-buy"
                        name="search"
                        className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer"
                        value="Buscar"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
          <Link to="#">
            <i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i>
          </Link>
        </div>

        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Alquiler de Consultorios, Quirófanos y Salas de Reunión
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Accede a consultorios equipados, quirófanos para tus operaciones o
              salas de reuniones médicas, todo por el tiempo que necesites y sin
              complicaciones. Optimiza recursos, trabaja de forma flexible y
              maximiza tus ingresos
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {packages.slice(0, 8).map((item, index) => {
              return (
                <div
                  className="group rounded-md shadow dark:shadow-gray-700"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
                    <img
                      src={item.image}
                      className="scale-125 group-hover:scale-100 duration-500 h-36"
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
                        className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"
                      >
                        <i className="mdi mdi-heart text-[20px] align-middle"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="flex items-center text-slate-400 font-medium mb-2">
                      <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                      {item.place}
                    </p>
                    <div className="w-full h-12">
                      <Link
                        to="/alquiler/16841-16851-68"
                        className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out line-clamp-2"
                      >
                        {item.title}
                      </Link>
                    </div>

                    <div className="flex items-center mt-2">
                      <span className="text-slate-400">Puntuación:</span>
                      <ul className="text-lg font-medium text-amber-400 list-none ms-2">
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

                    <div className="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">
                        {item.amount}
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

          <div className="mt-6 text-center">
            <Link
              to="/grid-right-sidebar"
              className="text-slate-400 hover:text-red-500 inline-block"
            >
              Ver más <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>

        <Client />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Preguntas Frecuentes
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Sabemos que elegir el espacio adecuado para tu práctica es una
              decisión importante, y queremos asegurarnos de que tengas toda la
              información necesaria para tomar la mejor decisión
            </p>
          </div>

          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-6 gap-6">
            <div className="md:col-span-12">
              <div>
                {faqData.map((item, index) => {
                  return (
                    <div
                      className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0"
                      key={index}
                    >
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                            activeIndex === item.id
                              ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                              : ""
                          }`}
                          onClick={() => setActiveIndex(item.id)}
                        >
                          <span>{item.title}</span>
                          <FiChevronDown
                            className={`w-4 h-4 shrink-0 ${
                              activeIndex === item.id ? "rotate-180" : ""
                            }`}
                          ></FiChevronDown>
                        </button>
                      </h2>
                      <div className={activeIndex === item.id ? "" : "hidden"}>
                        <div className="p-5">
                          <p className="text-slate-400 dark:text-gray-400">
                            {item.desc}
                          </p>
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
