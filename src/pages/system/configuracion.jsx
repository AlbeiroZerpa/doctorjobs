import React, { useState } from "react";

import AccountingTab from "../../components/accounting-tab";
import { PerfilConfiguracion } from "../../components/configuracion/perfilConfiguracion";
import Switcher from "../../components/switcher";
import { VerificacionConfiguracion } from "../../components/configuracion/verificacionConfiguracion";

export default function Configuracion(){

    const [activeTab, setactiveTab] = useState("perfil")

    const TabContent = ({ activeTab }) => {
        switch (activeTab) {
            case 'perfil':
                return <PerfilConfiguracion />;
            case 'verificacion':
                return <VerificacionConfiguracion />;
            case 'salir':
                return <div>Salir Content</div>;
            default:
                return <div>Default Content</div>;
        }
    };

    return(
        <>

        <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
            <div className="md:container container-fluid relative">
                <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <AccountingTab activeTab={activeTab}  setactiveTab={setactiveTab}/>
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </section>
        <Switcher/>
        </>
    )
}