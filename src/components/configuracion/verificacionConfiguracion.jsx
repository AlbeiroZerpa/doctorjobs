import { Link } from "react-router-dom";
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
} from "../../assets/icons/vander";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const VerificacionConfiguracion = () => {
  const [startDate, setStartDate] = useState(new Date());
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
                Seleccione su fecha:
              </label>
              <div className="relative mt-2">
                <FiCalendar className="size-[18px] absolute top-[10px] start-3 z-50"></FiCalendar>
                <DatePicker
                  className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          <input
            type="submit"
            id="submit"
            name="send"
            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
            value="Guardar Cambios"
          />
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
                  Año de Recepción: <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <FiCalendar className="w-4 h-4 absolute top-3 start-4"></FiCalendar>
                  <input
                    type="text"
                    maxLength="4"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Año de Recepción :"
                    id="firstname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="form-label font-medium">
                  Institución : <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <FaUniversity className="w-4 h-4 absolute top-3 start-4"></FaUniversity>
                  <input
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Institución :"
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
                <label className="form-label font-medium">Contraseña : </label>
                <div className="form-icon relative mt-2">
                  <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                  <input
                    name="name"
                    id="occupation"
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Contraseña :"
                  />
                </div>
              </div>
              <div>
                <label className="form-label font-medium">
                  País : <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                  <input
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="País :"
                    id="firstname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label className="form-label font-medium">
                  Número de Registro Profesional :
                  <span className="text-red-600">*</span>
                </label>
                <div className="form-icon relative mt-2">
                  <PiIdentificationCard className="w-4 h-4 absolute top-3 start-4"></PiIdentificationCard>
                  <input
                    type="text"
                    className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                    placeholder="Número de Registro Profesional :"
                    id="firstname"
                    name="name"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
              Descripción adicional : <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <TiMessage className="w-4 h-4 absolute top-3 start-4"></TiMessage >
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Descripción adicional :"
                  id="lastname"
                  name="name"
                  required=""
                />
              </div>
            </div>
          </div>

          <input
            type="submit"
            id="submit"
            name="send"
            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
            value="Guardar Cambios"
          />
        </form>
      </div>

      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
        <h5 className="text-lg font-semibold mb-5 text-red-600">
          Eliminar cuenta :
        </h5>

        <p className="text-slate-400 mb-4">
          ¿Quieres eliminar la cuenta? Por favor presione el botón "Eliminar"
          debajo
        </p>

        <Link
          to=""
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-600 text-white rounded-md"
        >
          Eliminar
        </Link>
      </div>
    </div>
  );
};
