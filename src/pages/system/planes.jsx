import React from "react";
import { Form, Link } from "react-router-dom";
import Switcher from "../../components/switcher";

export default function Planes() {
  return (
    <>
      <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
              Planes
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
              Planes
            </li>
          </ul>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-start gap-6">

            <div className="text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-semibold mb-4">
                Plan Bronce:
              </h2>
              <h1 className="text-4xl font-bold  mb-4">$50</h1>
              <hr className="my-4 border" />
              <ul className="list-disc ">
                <li>1000 Créditos</li>
                <li>Ideal para médicos emprendedores</li>
                <li>Alquiler de consultorios</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="mt-6 p-2 bg-red-500 text-white rounded-md  hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-semibold mb-4">
                Plan Plata:
              </h2>
              <h1 className="text-4xl font-bold  mb-4">$50</h1>
              <hr className="my-4 border" />
              <ul className="list-disc ">
                <li>3000 Créditos</li>
                <li>Alquiler de consultorios y salas de reuniones</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="mt-6 p-2 bg-red-500 text-white rounded-md  hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-semibold mb-4">
                Plan Oro:
              </h2>
              <h1 className="text-4xl font-bold  mb-4">$50</h1>
              <hr className="my-4 border" />
              <ul className="list-disc ">
                <li>5000 Créditos</li>
                <li>Alquiler de consultorios y salas de reuniones</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="mt-6 p-2 bg-red-500 text-white rounded-md  hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-800 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-semibold mb-4">
                Plan Oro:
              </h2>
              <h1 className="text-4xl font-bold  mb-4">$50</h1>
              <hr className="my-4 border" />
              <ul className="list-disc ">
                <li>5000 Créditos</li>
                <li>Alquiler de consultorios y salas de reuniones</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="mt-6 p-2 bg-red-500 text-white rounded-md  hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </>
  );
}
