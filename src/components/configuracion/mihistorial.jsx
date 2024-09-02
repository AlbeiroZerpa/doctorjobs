import React, { useState } from "react";
import { packages } from "../../data/data";
import { FiEye, FiLink, FiMail, FiMapPin, FiPhone, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png'

export const Mihistorial = () => {

  //Cortar titulos largos
  const cutTittle = (title, maxLength = 33) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:w-3/4 md:w-2/3 md:px-1 mt-6 md:mt-0">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <h5 className="text-lg font-semibold mb-4">Mi Historial:</h5>
            </div>

            <div className="relative">
              <div className="absolute top-5 left-3">
                <FiSearch></FiSearch>
              </div>
              <form>
                <input
                  type="text"
                  className="h-14 w-full pl-10 pr-20 rounded-lg z-0 shadow focus:shadow-red-500 transition duration-300 focus:outline-none"
                  placeholder="Buscar..."
                />
                <div className="absolute top-2 right-2">
                  <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
            <table className="w-full text-center text-slate-500 dark:text-slate-400">
              <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th scope="col" className="text-center px-2 py-0">
                    No.
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Lugar
                  </th>
                  <th scope="col" className="text-center px-6 py-3 w-20">
                    Tipo
                  </th>
                  <th scope="col" className="text-center px-6 py-3 w-28">
                    Precio
                  </th>
                  <th scope="col" className="text-center px-2 py-3 w-20">
                    Detalles
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.slice(0, 6).map((pkg, index) => (
                  <tr key={pkg.id} className="bg-white dark:bg-slate-900">
                    <td className="text-center px-1 py-0">{index + 1}</td>
                    <th
                      scope="row"
                      className="text-start px-3 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {cutTittle(pkg.title)}
                    </th>
                    <td className="text-center px-3 py-4">{pkg.place}</td>
                    <td className="text-center px-3 py-4">{pkg.type}</td>
                    <td className="text-center px-3 py-4">{pkg.amount}</td>
                    <td className="text-center px-1 py-6 flex justify-center items-center">
                      <FiEye onClick={() => setIsOpen(!isOpen)} className="size-4 hover:text-red-500 active:text-red-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isOpen && <>
                <div className='fixed inset-0 bg-black opacity-70 h-screen w-full z-10'>
                </div>
                <div
                    className="fixed inset-0 flex items-center justify-center z-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Modal Content */}
                    <div className="p-8 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-black w-full max-w-[80%] max-h-[75%] overflow-y-scroll mx-4 relative">
                        <div className="md:flex justify-center">
                            <div className="w-full">
                                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                    <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                                        <div className="md:flex justify-between">
                                            <div>
                                                <img src={logoDark} className="block dark:hidden" alt="" />
                                                <img src={logoLight} className="hidden dark:block" alt="" />
                                                <div className="flex mt-4">
                                                    <FiLink className="size-4 me-3 mt-1"></FiLink>
                                                    <Link to="#" target="_blank" className="text-red-500 dark:text-white font-medium">www.travosy.com</Link>
                                                </div>
                                            </div>

                                            <div className="mt-6 md:mt-0 md:w-56">
                                                <h5 className="text-lg font-semibold">Address:</h5>

                                                <ul className="list-none">
                                                    <li className="flex mt-3">
                                                        <FiMapPin className="size-4 me-3 mt-1"></FiMapPin>
                                                        <Link to="#" className="lightbox text-slate-400">1419 Riverwood Drive, <br /> Redding, CA 96001</Link>
                                                    </li>

                                                    <li className="flex mt-3">
                                                        <FiMail className="size-4 me-3 mt-1"></FiMail>
                                                        <Link to="mailto:contact@example.com" className="text-slate-400">info@Travosy.com</Link>
                                                    </li>

                                                    <li className="flex mt-3">
                                                        <FiPhone className="size-4 me-3 mt-1"></FiPhone>
                                                        <Link to="tel:+152534-468-854" className="text-slate-400">(+12) 1546-456-856</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:flex justify-between">
                                        <div className="mt-6">
                                            <h5 className="text-lg font-semibold">Invoice Details :</h5>

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
                                                    <span className="text-slate-400">1962 Pike Street, <br /> Diego, CA 92123</span>
                                                </li>

                                                <li className="flex mt-3">
                                                    <span className="w-24">Phone :</span>
                                                    <span className="text-slate-400">(+45) 4584-458-695</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mt-3 md:w-56">
                                            <ul className="list-none">
                                                <li className="flex mt-3">
                                                    <span className="w-24">Date :</span>
                                                    <span className="text-slate-400">15th Oct, 2021</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
                                        <table className="w-full text-start text-slate-500 dark:text-slate-400">
                                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                                <tr>
                                                    <th scope="col" className="text-center px-6 py-3 w-16">
                                                        No.
                                                    </th>
                                                    <th scope="col" className="text-start px-6 py-3">
                                                        Items
                                                    </th>
                                                    <th scope="col" className="text-center px-6 py-3 w-20">
                                                        Qty
                                                    </th>
                                                    <th scope="col" className="text-center px-6 py-3 w-28">
                                                        Rate($)
                                                    </th>
                                                    <th scope="col" className="text-end px-6 py-3 w-20">
                                                        Total($)
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white dark:bg-slate-900">
                                                    <td className="text-center px-6 py-4">
                                                        1
                                                    </td>
                                                    <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                        Apple MacBook Pro 17"
                                                    </th>
                                                    <td className="text-center px-6 py-4">
                                                        1
                                                    </td>
                                                    <td className="text-center px-6 py-4">
                                                        280
                                                    </td>
                                                    <td className="text-end px-6 py-4">
                                                        $ 280
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                                    <td className="text-center px-6 py-4">
                                                        2
                                                    </td>
                                                    <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                        Microsoft Surface Pro
                                                    </th>
                                                    <td className="text-center px-6 py-4">
                                                        1
                                                    </td>
                                                    <td className="text-center px-6 py-4">
                                                        140
                                                    </td>
                                                    <td className="text-end px-6 py-4">
                                                        $ 140
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                                    <td className="text-center px-6 py-4">
                                                        3
                                                    </td>
                                                    <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                        Magic Mouse 2
                                                    </th>
                                                    <td className="text-center px-6 py-4">
                                                        2
                                                    </td>
                                                    <td className="text-center px-6 py-4">
                                                        50
                                                    </td>
                                                    <td className="text-end px-6 py-4">
                                                        $ 100
                                                    </td>
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
                                                    <h6 className="mb-0">Customer Services : <Link to="tel:+152534-468-854" className="text-amber-500">(+12) 1546-456-856</Link></h6>
                                                </div>
                                            </div>

                                            <div className="mt-4 md:mt-0">
                                                <div className="text-slate-400 text-center md:text-end">
                                                    <h6 className="mb-0"><Link to="/terms" target="_blank" className="text-red-500">Terms & Conditions</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => setIsOpen(!isOpen)} className='mx-2 mt-4 block py-2 px-5 tracking-wide align-middle duration-500 text-base text-center border border-red-500 text-red-500 dark:text-white rounded-md'>
                                Cerrar
                            </button>
                            <button className='mx-2 mt-4 block py-2 px-5 tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md'>
                                Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </>}
    </>
  );
};
