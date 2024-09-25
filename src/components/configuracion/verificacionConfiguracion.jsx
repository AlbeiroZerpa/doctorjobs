import { useState } from "react";

import {
  FiUser,
  FiUserCheck,
  FiMail,
  FiPhone,
  FiGlobe,
  FiKey,
  SiGooglemaps,
  MdOutlineMapsHomeWork,
  PiIdentificationCard,
  PiGenderIntersex,
  FiCalendar,
  FaUniversity,
  TiMessage,
  LiaBirthdayCakeSolid,
} from "../../assets/icons/vander";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

import useUserStore from "../../store/userStore";

export const VerificacionConfiguracion = () => {
  const { verificacionUser } = useUserStore();

  const [startDate, setStartDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    return setTimeout(() => {
      verificacionUser();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
      <h5 className="text-xl font-semibold mb-4">
        Formulario de Registro para Médicos:
      </h5>
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <h5 className="text-lg font-semibold mb-4">
          Sección 1: Información Personal
        </h5>
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="form-label font-medium">
                Nombres : <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Nombres :"
                  id="firstname"
                  name="name"
                  required=""
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                Apellidos : <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUserCheck className="w-4 h-4 absolute top-3 start-4"></FiUserCheck>
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Apellidos :"
                  id="lastname"
                  name="name"
                  required=""
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                Correo electrónico: <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiMail className="w-4 h-4 absolute top-3 start-4"></FiMail>
                <input
                  type="email"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Correo Eléctronico :"
                  name="email"
                  required=""
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Teléfono : </label>
              <div className="form-icon relative mt-2">
                <FiPhone className="w-4 h-4 absolute top-3 start-4"></FiPhone>
                <input
                  name="name"
                  id="occupation"
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Teléfono :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                País de residencia :
              </label>
              <div className="form-icon relative mt-2">
                <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                <div className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800">
                  Ecuador
                </div>
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Provincia : </label>
              <div className="form-icon relative mt-2">
                <SiGooglemaps className="w-4 h-4 absolute top-3 start-4"></SiGooglemaps>
                <input
                  name="name"
                  id="occupation"
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Provincia :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Ciudad :</label>
              <div className="form-icon relative mt-2">
                <MdOutlineMapsHomeWork className="w-4 h-4 absolute top-3 start-4"></MdOutlineMapsHomeWork>
                <input
                  name="name"
                  id="occupation"
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Ciudad :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                Número de Identificación :
              </label>
              <div className="form-icon relative mt-2">
                <PiIdentificationCard className="w-4 h-4 absolute top-3 start-4"></PiIdentificationCard>
                <input
                  name="name"
                  id="occupation"
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Cédula/DNI/Pasaporte :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Sexo :</label>
              <div className="mt-2">
                <div className="flex items-center">
                  <PiGenderIntersex className="w-4 h-4 mr-2"></PiGenderIntersex>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="mujer"
                      className="mr-1"
                    />
                    Mujer
                  </label>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="hombre"
                      className="mr-1"
                    />
                    Hombre
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="otro"
                      className="mr-1"
                    />
                    Otro
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Fecha de Cumpleaños
              </label>
              <div className="relative mt-2">
                <LiaBirthdayCakeSolid className="size-[18px] absolute top-[10px] start-3 z-50"></LiaBirthdayCakeSolid>
                <DatePicker
                  className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  wrapperClassName="w-full"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Subir Cedula
              </label>
              <div className="relative mt-2">
                <input
                  type="file"
                  className="text-sm text-stone-500
                  file:mr-5 file:py-1 file:px-3 file:border-[1px]
                  file:text-xs file:font-medium
                file:bg-stone-50 file:text-stone-700
                  hover:file:cursor-pointer hover:file:bg-blue-50
                hover:file:text-blue-700"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
        <h5 className="text-lg font-semibold mb-4">
          Sección 2: Titulo de Médico General
        </h5>
        <form>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label className="form-label font-medium">
                  Año de Graduación: <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <FiCalendar className="w-4 h-4 absolute top-3 start-4"></FiCalendar>
                  <input
                    type="text"
                    maxLength="4"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Año de Graduación :"
                    id="firstname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="form-label font-medium">
                  Nombre de la Institución :
                  <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <FaUniversity className="w-4 h-4 absolute top-3 start-4"></FaUniversity>
                  <input
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Nombre de la Institución :"
                    id="lastname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="form-label font-medium">
                  País de Graduación : <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                  <input
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="País de Graduación :"
                    id="firstname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="form-label font-medium">
                Número de registro MSP :
                  <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <PiIdentificationCard className="w-4 h-4 absolute top-3 start-4"></PiIdentificationCard>
                  <input
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Número de registro MSP :"
                    id="firstname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Subir Título Médico General
              </label>
              <div className="relative mt-2">
                <input
                  type="file"
                  className="text-sm text-stone-500
                  file:mr-5 file:py-1 file:px-3 file:border-[1px]
                  file:text-xs file:font-medium
                file:bg-stone-50 file:text-stone-700
                  hover:file:cursor-pointer hover:file:bg-blue-50
                hover:file:text-blue-700"
                />
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={handleClick}
        className="py-2 px-5 mx-auto block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
      >
        {isLoading ? <Spinner className="mx-auto block" /> : "Enviar"}
      </button>
    </div>
  );
};
