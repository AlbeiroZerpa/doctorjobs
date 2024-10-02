import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BackToHome from "../../components/back-to-home";
import Switcher from "../../components/switcher";

import useUserStore from "../../store/userStore";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { FiEye } from "../../assets/icons/vander";
import { HttpAuth } from "../../apis/HttpAuth";

export default function Signup() {
  const { login } = useUserStore();
  const navigate = useNavigate();

  // Estado para controlar si está cargando
  const [isLoading, setIsLoading] = useState(false);

  // Estado para controlar la vision de contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Estado para almacenar los valores de los errores
  const [error, setError] = useState(null);

  // Estado para almacenar los valores de los campos
  const [formData, setFormData] = useState({
    password: "",
    correo: "",
    nombre: "",
    apellido: "",
    telefono: "",
  });

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    HttpAuth.Registro(formData).then((response) => {
      console.log(response);
      if (response.status === 201) {
        login(response.data.medico);
        navigate("/signup-success");
      } else if (response.status === 400) {
        setError(response.data.error);
        setIsLoading(false);
        setTimeout(() => {
          setError(null);
        }, 1500);
      } else {
        alert(response.data.error);
      }
    });
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
          id="particles-snow"
        ></div>
        <div className="container relative z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] mt-6 w-full m-auto px-6 py-4 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <h5 className="my-2 text-xl font-semibold text-center">Regístrate</h5>
              <form
                onSubmit={handleSubmit}
                className="text-start"
                action="signup-success.html"
              >
                <div className="grid grid-cols-1">
                  <div className="mb-2">
                    <input
                      name="nombre"
                      onChange={handleChange}
                      type="text"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      name="apellido"
                      onChange={handleChange}
                      type="text"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Apellido"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <input
                      name="telefono"
                      onChange={handleChange}
                      value={formData.telefono}
                      type="text"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Teléfono:"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <input
                      name="correo"
                      onChange={handleChange}
                      value={formData.email}
                      type="email"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Correo Eléctronico"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-icon relative mt-2">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        value={formData.password}
                        className="mt-3 w-full py-2 pr-3 ps-8 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Contraseña"
                        required
                      />
                                            <FiEye
                        onClick={() => setShowPassword(!showPassword)}
                        className={`w-5 h-4 absolute top-6 start-2 cursor-pointer ${
                          showPassword && "text-red-500"
                        }`}
                      ></FiEye>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-red-500 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        value=""
                        id="AcceptT&amp;C"
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="AcceptT&amp;C"
                      >
                        Acepto
                        <Link to="" className="text-red-500">
                          Términos y Condiciones
                        </Link>
                      </label>
                    </div>
                  </div>

                  {error !== null && (
                    <label className="text-red-600 mb-4">{error}</label>
                  )}

                  <div className="mb-4">
                    <button
                      type="submit"
                      className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
                    >
                      {isLoading ? (
                        <Spinner className="mx-auto block" />
                      ) : (
                        "Registrar"
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      ¿Ya tienes una cuenta?
                    </span>{" "}
                    <Link
                      to="/login"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Iniciar sesión
                    </Link>
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
  );
}
