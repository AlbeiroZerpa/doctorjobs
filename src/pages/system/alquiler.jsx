import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import image1 from "../../assets/images/listing/1.jpg";
import image2 from "../../assets/images/listing/2.jpg";
import image3 from "../../assets/images/listing/3.jpg";
import image4 from "../../assets/images/listing/4.jpg";

import DetailSidebar from "../../components/detail-sidebar";
import Switcher from "../../components/switcher";

import {
  FiCamera,
  FiMapPin,
  FiLink,
  FiMail,
  FiPhone,
  FiUser,
  FiUsers,
} from "../../assets/icons/vander";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import { packages, tourDetailAbout } from "../../data/data";

export default function Alquiler() {
  let [activeTab, setActiveTab] = useState(1);
  const [auxiliares, setAuxiliares] = useState(0);
  const [enfermeros, setEnfermeros] = useState(0);

  let images = [image1, image2, image3, image4];
  let [photoIndex, setActiveIndex] = useState(0);
  let [isOpen, setOpen] = useState(false);

  let handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };
  let params = useParams();
  let id = params.id;
  let data = packages.find((item) => item.id === parseInt(id));

  const inputAuxiliares = (e) => {
    e.target.value === "No"
      ? setAuxiliares(0)
      : setAuxiliares(Number(e.target.value));
  };

  const inputEnfemeros = (e) => {
    e.target.value === "No"
      ? setEnfermeros(0)
      : setEnfermeros(Number(e.target.value));
  };

  return (
    <>
      <section className="relative table w-full items-center py-24 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">
              {data?.title ? data.title : `Consultorio #02: "Clínica Pasteur`}
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Travosy</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Alquiler
            </li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-8 md:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-8 col-span-7">
                  <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img
                      src={image1}
                      className="w-full lg:h-60 md:h-44 h-48 object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        to="#"
                        onClick={() => handleCLick(0)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 col-span-5">
                  <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img
                      src={image2}
                      className="w-full lg:h-60 md:h-44 h-48 object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        to="#"
                        onClick={() => handleCLick(1)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 col-span-5">
                  <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img
                      src={image3}
                      className="w-full lg:h-60 md:h-44 h-48 object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        to="#"
                        onClick={() => handleCLick(2)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 col-span-7">
                  <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                    <img
                      src={image4}
                      className="w-full lg:h-60 md:h-44 h-48 object-cover"
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        to="#"
                        onClick={() => handleCLick(3)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="text-2xl font-semibold mt-5">
                550 Créditos / Hora
              </h5>
              <h5 className="text-2xl font-semibold mt-5">
                {data?.title ? data.title : "Consultorio #02: Clínica Pasteur"}
              </h5>
              <p className="flex items-center text-slate-400 font-medium mt-2">
                <FiMapPin className="size-4 me-1"></FiMapPin>{" "}
                {data?.place ? data.place : "Guayaquil"}
              </p>

              <ul className="list-none">
                {tourDetailAbout.map((item, index) => {
                  let Icon = item.icon;
                  return (
                    <li
                      className="inline-flex items-center me-5 mt-5"
                      key={index}
                    >
                      <Icon className="size-6 stroke-[1.5] text-red-500"></Icon>

                      <div className="ms-3">
                        <p className="font-medium">{item.name}</p>
                        <span className="text-slate-400 font-medium text-sm">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6">
                <h5 className="text-lg font-semibold">
                  Descripción del Espacio:
                </h5>

                <p className="text-slate-400 mt-6">
                  Ubicado en un edificio moderno, este consultorio de 15 m²
                  ofrece el espacio perfecto para profesionales de la salud que
                  buscan comodidad y accesibilidad. Situado en el 3er piso, el
                  edificio cuenta con ascensor para mayor facilidad de acceso
                  para tus pacientes. Además, dispondrás de internet de alta
                  velocidad, ideal para mantenerte conectado y administrar tus
                  consultas de manera eficiente.
                </p>
                <p className="text-slate-400 mt-3">
                  El consultorio también incluye una sala de espera cómoda y
                  bien equipada, asegurando que tus pacientes tengan una
                  experiencia agradable desde el momento en que llegan.
                </p>
                <div className="md:flex mt-4">
                  <div className="md:w-1/3">
                    <span className="font-medium">¿Necesita Auxiliares?</span>
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <div className="form-icon relative">
                      <FiUsers className="w-4 h-4 absolute top-3 start-4"></FiUsers>
                      <select
                        className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0"
                        onChange={inputAuxiliares}
                      >
                        <option value="" disabled hidden selected>
                          No
                        </option>
                        <option>No</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="md:flex mt-4">
                  <div className="md:w-1/3">
                    <span className="font-medium">¿Necesita Enfermeros?</span>
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <div className="form-icon relative">
                      <FiUsers className="w-4 h-4 absolute top-3 start-4"></FiUsers>
                      <select
                        className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0"
                        onChange={inputEnfemeros}
                      >
                        <option value="" disabled hidden selected>
                          No
                        </option>
                        <option>No</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-6">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-6">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-left">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-left">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-left">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full">Send Message</button>
                            </form>
                        </div> */}
            </div>

            <DetailSidebar />
          </div>
        </div>
      </section>
      <Switcher />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
