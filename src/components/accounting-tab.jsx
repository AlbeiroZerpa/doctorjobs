import clientImg from "../assets/images/client/16.jpg";

import {
  FaEdit,
  FiAirplay,
  FiClock,
  FiFileText,
  FiHeart,
  FiLogOut,
} from "../assets/icons/vander";

import useUserStore from "../store/userStore";
import { useState } from "react";
import { HttpUsuario } from "../apis/HttpUsuario";

export default function AccountingTab({ activeTab, setactiveTab }) {
  const { user } = useUserStore();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      HttpUsuario.ActualizarFotoPerfil(file)
        .then((response) =>{
          console.log(response)
        })
    }
  };
  let loadFile = (e) => {
    var image = document.getElementById(e.target.name);
    image.src = URL.createObjectURL(e.target.files[0]);
  };

  return (
    <div className="lg:w-1/4 md:w-1/3 md:px-3">
      <div className="relative md:-mt-48 -mt-32">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          <div className="profile-pic text-center mb-5">
            <input
              id="pro-img"
              name="profile-image"
              type="file"
              className="hidden"
              onChange={(e) => loadFile(e)}
            />
            <div>
              <div className="relative group w-32 h-32">
                <img
                  src="/default-profile.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Input de archivo oculto */}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="profileImageInput"
                  onChange={handleImageChange}
                />

                {/* Botón de edición que abre el input de archivo */}
                <label
                  htmlFor="profileImageInput"
                  className="absolute inset-0 cursor-pointer flex items-center justify-center rounded-full opacity-0 group-hover:opacity-50 group-hover:bg-black transition-all duration-200"
                >
                  <FaEdit className="text-white" />
                </label>
              </div>

              <div className="mt-4">
                <h5 className="text-lg font-semibold">
                  {user.nombre} {user.apellido}
                </h5>
                <p className="text-slate-400">{user.correo}</p>
                <p
                  className={`inline-block border py-1 px-2 text-xs rounded ${
                    user.verificacion
                      ? "border-green-500 text-green-500"
                      : "border-red-700 text-red-700"
                  }`}
                >
                  {user.verificacion ? "Verificado" : "No Verificiado"}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700">
            <ul className="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
              <li
                className={`navbar-item account-menu ${
                  activeTab === "perfil"
                    ? "active text-red-500"
                    : "text-slate-400"
                }`}
                onClick={() => setactiveTab("perfil")}
              >
                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                  <span className="me-2 mb-0">
                    <FiAirplay className="size-4" />
                  </span>
                  <h6 className="mb-0 font-medium">Perfil</h6>
                </div>
              </li>

              <li
                className={`navbar-item account-menu ${
                  activeTab === "verificacion"
                    ? "active text-red-500"
                    : "text-slate-400"
                }`}
                onClick={() => setactiveTab("verificacion")}
              >
                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                  <span className="me-2 mb-0">
                    <FiFileText className="size-4" />
                  </span>
                  <h6 className="mb-0 font-medium">Verificación Médica</h6>
                </div>
              </li>

              <li
                className={`navbar-item account-menu ${
                  activeTab === "favoritos"
                    ? "active text-red-500"
                    : "text-slate-400"
                }`}
                onClick={() => setactiveTab("favoritos")}
              >
                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                  <span className="me-2 mb-0">
                    <FiHeart className="size-4" />
                  </span>
                  <h6 className="mb-0 font-medium">Favoritos</h6>
                </div>
              </li>

              <li
                className={`navbar-item account-menu ${
                  activeTab === "mihistorial"
                    ? "active text-red-500"
                    : "text-slate-400"
                }`}
                onClick={() => setactiveTab("mihistorial")}
              >
                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                  <span className="me-2 mb-0">
                    <FiClock className="size-4" />
                  </span>
                  <h6 className="mb-0 font-medium">Mi Historial</h6>
                </div>
              </li>

              <li
                className={`navbar-item account-menu ${
                  activeTab === "salir"
                    ? "active text-red-500"
                    : "text-slate-400"
                }`}
                onClick={() => setactiveTab("salir")}
              >
                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                  <span className="me-2 mb-0">
                    <FiLogOut className="size-4" />
                  </span>
                  <h6 className="mb-0 font-medium">Salir</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
