import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiCalendar,
  FiClock,
  FiLink,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiUsers,
} from "../assets/icons/vander";

import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

import useUserStore from "../store/userStore";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default function DetailSidebar() {
  const { user, removePuntos } = useUserStore();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [inputPacientes, setinputPacientes] = useState();
  const [excludeTimes, setExcludeTimes] = useState([
    new Date().setHours(16, 0, 0, 0), // 4:00 PM
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPassed, setIsOpenPassed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);

  const handleTimeChange = (time) => {
    const updatedDate = new Date(startDate);
    updatedDate.setHours(time.getHours());
    updatedDate.setMinutes(time.getMinutes());
    setStartDate(updatedDate);
  };

  const handleAlquilar = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (user.puntos < 600) {
        setIsOpen(true);
        setIsLoading(false);
      } else {
        setIsOpenPassed(!isOpenPassed);
        removePuntos(550);
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <>
      <div className="lg:col-span-4 md:col-span-5">
        <div className="p-4 rounded-md shadow-xl dark:shadow-gray-700 sticky top-20">
          <div className="flex flex-col">
            <label className="font-semibold">Fecha:</label>
            <div className="relative mt-2">
              <FiCalendar className="size-[18px] absolute top-[10px] start-3 z-50" />
              <DatePicker
                locale={es}
                className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0 start"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                wrapperClassName="w-full"
                dateFormat="MMMM d, yyyy"
              />
            </div>
            <label className="font-semibold mt-2">Hora Inicial:</label>
            <div className="relative mt-2">
              <FiClock className="size-[18px] absolute top-[10px] start-3 z-50" />
              <DatePicker
                locale={es}
                className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0 start"
                selected={startDate}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                wrapperClassName="w-full"
                timeIntervals={60}
                excludeTimes={excludeTimes.map((time) => new Date(time))}
                timeCaption="Hora"
                dateFormat="h:mm aa"
              />
            </div>
          </div>
          <label className="font-semibold mt-3">Hora Final:</label>
          <div className="relative mt-2">
            <FiClock className="size-[18px] absolute top-[10px] start-3 z-50" />
            <DatePicker
              locale={es}
              className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0 start"
              selected={startDate2}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              wrapperClassName="w-full"
              timeIntervals={60}
              excludeTimes={excludeTimes.map((time) => new Date(time))}
              timeCaption="Hora"
              dateFormat="h:mm aa"
            />
          </div>
          <div className="mt-4">
            <form>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <span className="font-medium">Nu. de pacientes:</span>
                </div>
                <div className="md:w-2/3 mt-4 md:mt-0">
                  <div className="form-icon relative">
                    <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                    <input
                      type="number"
                      className="w-full ps-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Nu. de pacientes:"
                      id="Noperson"
                      name="number"
                      value={inputPacientes}
                      onChange={inputPacientes}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex w-full mt-4">
                <span className="font-medium text-end text-4xl">
                  {price} Créditos
                </span>
              </div>
              <div className="md:flex w-full mt-4">
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-red-600"
                  />
                  <span class="ml-2 text-gray-700 text-sm">
                    Acepto Términos y Condiciones de Uso
                  </span>
                </label>
              </div>
              <div className="md:flex w-full mt-4">
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-red-600"
                  />
                  <span class="ml-2 text-gray-700 text-sm">
                    Acepto Términos de Privacidad
                  </span>
                </label>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <button
              className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
              onClick={handleAlquilar}
            >
              {isLoading ? <Spinner className="mx-auto block" /> : "Reservar"}
            </button>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-medium">Ubicación</h5>

            <div className="mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                style={{ border: "0" }}
                title="travosy"
                className="w-full h-[300px] rounded-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-70 h-screen w-full z-10"></div>
          <div
            className="fixed inset-0 flex items-center justify-center z-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Modal Content */}
            <div className="p-8 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-black w-full max-w-md mx-4 relative">
              <h3 className="text-center">
                No posees los puntos suficiente por favor compre mas puntos
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="mx-2 mt-4 block py-2 px-5 tracking-wide align-middle duration-500 text-base text-center border border-red-500 text-red-500 dark:text-white rounded-md"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => navigate("/planes")}
                  className="mx-2 mt-4 block py-2 px-5 tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {isOpenPassed && (
        <>
          <div className="fixed inset-0 bg-black opacity-70 h-screen w-full z-10"></div>
          <div
            className="fixed inset-0 flex items-center justify-center z-20"
            onClick={() => setIsOpenPassed(!isOpenPassed)}
          >
            {/* Modal Content */}
            <div className="p-8 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-black w-full max-w-[80%] max-h-[75%] overflow-y-scroll mx-4 relative">
              <div className="md:flex justify-center">
                <div className="w-full">
                  <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                      <div className="md:flex justify-between">
                        <div>
                          <img
                            src={logoDark}
                            className="block dark:hidden"
                            alt=""
                          />
                          <img
                            src={logoLight}
                            className="hidden dark:block"
                            alt=""
                          />
                          <div className="flex mt-4">
                            <FiLink className="size-4 me-3 mt-1"></FiLink>
                            <Link
                              to="#"
                              target="_blank"
                              className="text-red-500 dark:text-white font-medium"
                            >
                              www.travosy.com
                            </Link>
                          </div>
                        </div>

                        <div className="mt-6 md:mt-0 md:w-56">
                          <h5 className="text-lg font-semibold">Address:</h5>

                          <ul className="list-none">
                            <li className="flex mt-3">
                              <FiMapPin className="size-4 me-3 mt-1"></FiMapPin>
                              <Link to="#" className="lightbox text-slate-400">
                                1419 Riverwood Drive, <br /> Redding, CA 96001
                              </Link>
                            </li>

                            <li className="flex mt-3">
                              <FiMail className="size-4 me-3 mt-1"></FiMail>
                              <Link
                                to="mailto:contact@example.com"
                                className="text-slate-400"
                              >
                                info@Travosy.com
                              </Link>
                            </li>

                            <li className="flex mt-3">
                              <FiPhone className="size-4 me-3 mt-1"></FiPhone>
                              <Link
                                to="tel:+152534-468-854"
                                className="text-slate-400"
                              >
                                (+12) 1546-456-856
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="md:flex justify-between">
                      <div className="mt-6">
                        <h5 className="text-lg font-semibold">
                          Invoice Details :
                        </h5>

                        <ul className="list-none">
                          <li className="flex mt-3">
                            <span className="w-24">Invoice No. :</span>
                            <span className="text-slate-400">land45845621</span>
                          </li>

                          <li className="flex mt-3">
                            <span className="w-24">Name :</span>
                            <span className="text-slate-400">Calvin Carlo</span>
                          </li>

                          <li className="flex mt-3">
                            <span className="w-24">Address :</span>
                            <span className="text-slate-400">
                              1962 Pike Street, <br /> Diego, CA 92123
                            </span>
                          </li>

                          <li className="flex mt-3">
                            <span className="w-24">Phone :</span>
                            <span className="text-slate-400">
                              (+45) 4584-458-695
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-3 md:w-56">
                        <ul className="list-none">
                          <li className="flex mt-3">
                            <span className="w-24">Date :</span>
                            <span className="text-slate-400">
                              15th Oct, 2021
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
                      <table className="w-full text-start text-slate-500 dark:text-slate-400">
                        <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                          <tr>
                            <th
                              scope="col"
                              className="text-center px-6 py-3 w-16"
                            >
                              No.
                            </th>
                            <th scope="col" className="text-start px-6 py-3">
                              Items
                            </th>
                            <th
                              scope="col"
                              className="text-center px-6 py-3 w-20"
                            >
                              Qty
                            </th>
                            <th
                              scope="col"
                              className="text-center px-6 py-3 w-28"
                            >
                              Rate($)
                            </th>
                            <th scope="col" className="text-end px-6 py-3 w-20">
                              Total($)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white dark:bg-slate-900">
                            <td className="text-center px-6 py-4">1</td>
                            <th
                              scope="row"
                              className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              Apple MacBook Pro 17"
                            </th>
                            <td className="text-center px-6 py-4">1</td>
                            <td className="text-center px-6 py-4">280</td>
                            <td className="text-end px-6 py-4">$ 280</td>
                          </tr>
                          <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                            <td className="text-center px-6 py-4">2</td>
                            <th
                              scope="row"
                              className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              Microsoft Surface Pro
                            </th>
                            <td className="text-center px-6 py-4">1</td>
                            <td className="text-center px-6 py-4">140</td>
                            <td className="text-end px-6 py-4">$ 140</td>
                          </tr>
                          <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                            <td className="text-center px-6 py-4">3</td>
                            <th
                              scope="row"
                              className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              Magic Mouse 2
                            </th>
                            <td className="text-center px-6 py-4">2</td>
                            <td className="text-center px-6 py-4">50</td>
                            <td className="text-end px-6 py-4">$ 100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="w-56 ms-auto p-5">
                      <ul className="list-none">
                        <li className="text-slate-400 flex justify-between">
                          <span>Subtotal :</span>
                          <span>$ 520</span>
                        </li>
                        <li className="text-slate-400 flex justify-between mt-2">
                          <span>Taxes :</span>
                          <span>$ 20</span>
                        </li>
                        <li className="flex justify-between font-semibold mt-2">
                          <span>Total :</span>
                          <span>$ 540</span>
                        </li>
                      </ul>
                    </div>

                    <div className="invoice-footer border-t border-gray-100 dark:border-gray-700 pt-6">
                      <div className="md:flex justify-between">
                        <div>
                          <div className="text-slate-400 text-center md:text-start">
                            <h6 className="mb-0">
                              Customer Services :{" "}
                              <Link
                                to="tel:+152534-468-854"
                                className="text-amber-500"
                              >
                                (+12) 1546-456-856
                              </Link>
                            </h6>
                          </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                          <div className="text-slate-400 text-center md:text-end">
                            <h6 className="mb-0">
                              <Link
                                to="/terms"
                                target="_blank"
                                className="text-red-500"
                              >
                                Terms & Conditions
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpenPassed(!isOpenPassed)}
                  className="mx-2 mt-4 block py-2 px-5 tracking-wide align-middle duration-500 text-base text-center border border-red-500 text-red-500 dark:text-white rounded-md"
                >
                  Cerrar
                </button>
                <button className="mx-2 mt-4 block py-2 px-5 tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">
                  Imprimir
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
