import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import AccountingTab from "../../components/accounting-tab";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import { packages } from "../../data/data";
import { FiMapPin } from "../../assets/icons/vander";

export default function UserContratados() {
  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={false}
        manuclass="justify-end"
      />

      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <AccountingTab />
            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
              <table className="min-w-full text-start text-slate-500 dark:text-slate-400">
                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="text-center px-6 py-3 w-10">
                      No.
                    </th>
                    <th scope="col" className="text-start px-6 py-3 w-20">
                      Espacios
                    </th>
                    <th scope="col" className="text-center px-6 py-3 w-20">
                      Tipo
                    </th>
                    <th scope="col" className="text-center px-6 py-3 w-10">
                      Cantidad
                    </th>
                    <th scope="col" className="text-center px-6 py-3 w-20">
                      Puntos
                    </th>
                    <th scope="col" className="text-center px-6 py-3 w-20">
                      Editar
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
                      HOSPITAL DEL DÍA SAMUEL RATINOFF
                    </th>
                    <td className="text-center py-4">Consultorio</td>
                    <td className="text-center py-4">1</td>
                    <td className="text-center py-4">500</td>
                    <td className="text-end px-6 py-4">boton</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                    <td className="text-center px-6 py-4">2</td>
                    <th
                      scope="row"
                      className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      GÉNESIS HOSPITAL DEL DÍA
                    </th>
                    <td className="text-center py-4">Quirófano</td>
                    <td className="text-center py-4">1</td>
                    <td className="text-center py-4">1000</td>
                    <td className="text-end px-6 py-4">boton</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                    <td className="text-center px-6 py-4">3</td>
                    <th
                      scope="row"
                      className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      HOSPITAL LEÓN BECERRA DE GUAYAQUIL
                    </th>
                    <td className="text-center py-4">Sala de Reunión</td>
                    <td className="text-center py-4">1</td>
                    <td className="text-center py-4">3000</td>
                    <td className="text-center py-4">boton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
