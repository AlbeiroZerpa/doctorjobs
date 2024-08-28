import React from "react";
import Navbar from "../components/navbar";
import { Form, Link } from "react-router-dom";
import Switcher from "../components/switcher";
import Footer from "../components/footer";

export default function Planes() {
  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={true}
        manuclass="justify-end nav-light"
      />

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
            <div className="bg-amber-600 border rounded-3xl text-start gap-4 p-8 bg- transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-4">
                Plan Bronce:
              </h2>
              <h1 className="text-4xl font-bold text-black mb-4">$50</h1>
              <hr className="my-4 border-black" />
              <ul className="list-disc text-black">
                <li>1000 Créditos</li>
                <li>Ideal para médicos emprendedores</li>
                <li>Alquiler de consultorios</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-red-500 mt-6 p-2 rounded-2xl hover:bg-blue-950 text-white hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="bg-slate-200 border rounded-3xl text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-4">
                Plan Plata:
              </h2>
              <h1 className="text-4xl font-bold text-black mb-4">$149</h1>
              <hr className="my-4 border-black" />
              <ul className="list-disc text-black">
                <li>3000 Créditos</li>
                <li>Alquiler de consultorios y salas de reuniones</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-red-500 mt-6 p-2 rounded-2xl hover:bg-blue-950 text-white hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="bg-yellow-400  border rounded-3xl text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-4">
                Plan Oro:
              </h2>
              <h1 className="text-4xl font-bold text-black mb-4">$249</h1>
              <hr className="my-4 border-black" />
              <ul className="list-disc text-black">
                <li>5000 Créditos</li>
                <li>Alquiler de consultorios y salas de reuniones</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-red-500 mt-6 p-2 rounded-2xl hover:bg-blue-950 text-white hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="bg-cyan-400 border rounded-3xl text-start gap-4 p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-4">
                Plan Oro:
              </h2>
              <h1 className="text-4xl font-bold text-black mb-4">$249</h1>
              <hr className="my-4 border-black" />
              <ul className="list-disc text-black">
                <li>5000 Créditos</li>
                <li>Alquiler de consultorios y salas de reuniones</li>
                <li>Duración: 2 meses</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-red-500 mt-6 p-2 rounded-2xl hover:bg-blue-950 text-white hover:duration-100">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
