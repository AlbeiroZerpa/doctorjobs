import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo-icon.png'
import Switcher from "../../components/switcher";
import BackToHome from "../../components/back-to-home";

import useUserStore from '../../store/userStore'

export default function Login() {

    const { login } = useUserStore();

    // Estado para almacenar los valores de los campos
    const [formData, setFormData] = useState({
        password: '',
        email: '',
    });

    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        login('John Doe');
    };

    return (
        <>
            <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                <div className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
                <div className="container relative z-3">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                            <Link to="/"><img src={logo} className="mx-auto" alt="" /></Link>
                            <h5 className="my-6 text-xl font-semibold">Iniciar Sesión</h5>
                            <form onSubmit={handleSubmit} className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginEmail">Correo Eléctronico:</label>
                                        <input name="email" onChange={handleChange} value={formData.email} type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="ejemplo@ejemplo.com" required />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPassword">Contraseña :</label>
                                        <input name="password" onChange={handleChange} value={formData.password} type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Contraseña:" required />
                                    </div>

                                    <div className="flex justify-content-center mb-4">
                                        <p className="text-slate-400 mb-0"><Link to="/forgot-password" className="text-slate-400">¿Olvidaste tu contraseña?</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <input type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full" value="Iniciar Sesión" />
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">¿No tienes una cuenta?</span> <Link to="/signup" className="text-black dark:text-white font-bold inline-block">Registráte</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
            <BackToHome />
        </>
    )
}