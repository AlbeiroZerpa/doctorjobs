import React from "react";
import { Link } from "react-router-dom";

import about from "../assets/images/about.jpg";
import about2 from "../assets/images/about2.jpg";
import map from "../assets/images/map-plane-big.png";

import { FiUsers, FiGlobe } from "../assets/icons/vander";

import CountUp from "react-countup";

export default function About() {
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
        <div className="md:col-span-5">
          <div className="relative">
            <img
              src={about}
              className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]"
              alt=""
            />

            <div className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
              <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                <FiUsers className="size-6"></FiUsers>
              </div>
              <div className="flex-1">
                <span className="text-slate-400">Visitantes</span>
                <p className="text-xl font-bold">
                  <CountUp className="counter-value" start={0} end={4589} />
                </p>
              </div>
            </div>

            <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
              <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                <FiGlobe className="size-6"></FiGlobe>
              </div>
              <div className="flex-1">
                <span className="text-slate-400">Consultorios</span>
                <p className="text-xl font-bold">
                  <CountUp className="counter-value" start={0} end={100} />+
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ms-8">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Sistema de Alquiler:
              <br />
              DoctorJobs
            </h3>
            <p className="text-slate-400 max-w-xl mb-6">
              Somos un equipo especializado en el mercado médico y de alquiler
              de espacios profesionales. Contamos con más de 15 años de
              experiencia en marketing, auditoría médica y la gestión de
              servicios de salud. A lo largo de nuestra trayectoria, hemos
              detectado la dificultad que enfrentan los profesionales al
              intentar alquilar consultorios, quirófanos o salas de reunión.
              <br />
              <br /> Por eso creamos Doctorjobs, un modelo de negocio innovador
              que ofrece una solución flexible y accesible para alquilar estos
              espacios por horas o días específicos, permitiendo a médicos y
              especialistas enfocarse en lo que mejor saben hacer: cuidar de sus
              pacientes, sin las complicaciones de un alquiler tradicional.
            </p>
            <Link
              to=""
              className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
            >
              Leer Más{" "}
              <i className="mdi mdi-chevron-right align-middle ms-0.5"></i>
            </Link>
          </div>
        </div>

        <div className="mt-16 md:col-span-7">
          <div className="lg:ms-8">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Beneficios de Doctorjobs
            </h3>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Flexibilidad</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Alquila por horas o días según lo necesites.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Variedad de espacios</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Elige entre consultorios, quirófanos y salas de reunión.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">
                  Equipos y personal adicional
                </h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Puedes solicitar equipos médicos especializados o personal de
                  apoyo.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Ahorro de costos</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  No más costos fijos por alquileres mensuales.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Conveniencia geográfica</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Elige un espacio cerca de ti o de tus pacientes.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Plataforma fácil de usar</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Reserva tu espacio con solo unos clics.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Normativas y seguridad</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Todos los espacios cumplen con las regulaciones sanitarias del
                  Ministerio de Salud.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Variedad de precios</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Consultorios sencillos o más completos, según tus necesidades.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">Expansión de tu práctica</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Alquila espacios en diferentes hospitales o clínicas.
                </p>
              </div>
            </div>

            <div class="relative w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-red-500">
                  Descuentos por uso recurrente
                </h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Gana más reservando con frecuencia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 md:col-span-5">
          <div className="relative">
            <img
              src={about2}
              className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bottom-0 start-1/3 -z-1">
          <img src={map} className="lg:w-[600px] w-96" alt="" />
        </div>
      </div>
    </div>
  );
}
