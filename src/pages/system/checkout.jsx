import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Switcher from "../../components/switcher";
import { Spinner } from "react-activity";

import useUserStore from "../../store/userStore";

export default function Checkout() {
  const { addPuntos } = useUserStore();
  const navigate = useNavigate();

  // Estado para controlar si está cargando
  const [isLoading, setIsLoading] = useState(false);

  const handleCompra = (item) => {
    setIsLoading(true);
    setTimeout(() => {
      addPuntos(item);
      navigate("/verificacion-pago-planes");
    }, 1500);
  };

  return (
    <>
      <section className="relative table w-full items-center py-24 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
              Checkout
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
              Checkout
            </li>
          </ul>
        </div>
      </section>

      <Switcher />
      <div class="w-full bg-white border-t border-b border-gray-200 px-12 py-10 text-gray-800">
        <div class="w-full">
          <div class="-mx-3 md:flex items-start">
            <div class="px-3 md:w-7/12 lg:pr-10">
              <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div class="w-full flex items-center">
                  <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <img src="../../../public/logo192.png" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Consultorio #02: "Clínica Pasteur
                    </h6>
                    <p class="text-gray-400">x 1</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-600 text-xl">
                      1000 Puntos
                    </span>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div class="w-full flex mb-3 items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Subtotal</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">1000 Puntos</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Enfermero</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">50 Puntos</span>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Total</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold text-gray-400 text-sm">AUD</span>{" "}
                    <span class="font-semibold">1050</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-5/12">
              <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-3 items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">Cliente</span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>John Doe</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">
                      Dirección de Espacio
                    </span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>Calle Nueva Republica, Av. 23</span>
                  </div>
                </div>
                <div class="w-full flex mb-3 items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">Fecha</span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>13/09/2024</span>
                  </div>
                </div>
                <div class="w-full flex mb-3 items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">Duración</span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>3 Horas</span>
                  </div>
                </div>
              </div>
              <div>
                <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                  <i class="mdi mdi-lock-outline mr-1"></i> RESERVAR AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
