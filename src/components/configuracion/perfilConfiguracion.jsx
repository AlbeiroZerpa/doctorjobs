import { useState } from "react";
import { FiUser, FiUserCheck, FiMail, FiKey } from "../../assets/icons/vander";
import useUserStore from "../../store/userStore";
import { HttpUsuario } from "../../apis/HttpUsuario";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-activity";

export const PerfilConfiguracion = () => {
  const { user } = useUserStore();

  // Estado para controlar si está cargando
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  // Estado para almacenar los valores de los campos
  const [formData, setFormData] = useState({
    usuarioId: user.id,
    nombre: user.nombre,
    apellido: user.apellido,
    correo: user.correo,
  });

  const [formDataPassword, setFormDataPassword] = useState({
    usuarioId: user.id,
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormDataPassword({
      ...formDataPassword,
      [name]: value,
    });
  };

  const handleSubmitPerfil = (e) => {
    e.preventDefault();

    setIsLoadingUser(true);

    HttpUsuario.ActualizarPerfilMedico(formData)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return setIsLoadingUser(false);
        } else {
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return setIsLoadingUser(false);
        }
      });
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();

    setIsLoadingPassword(true);

    HttpUsuario.CambiarPassword(formDataPassword)
    .then((response) => {
      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return setIsLoadingPassword(false);
      } else {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return setIsLoadingPassword(false);
      }
    });
  };

  return (
    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mb-6">
        <h5 className="text-lg font-semibold mb-4">Detalles personales:</h5>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <div>
            <label className="form-label font-medium">
              Nombre: <span className="text-red-600">*</span>
            </label>
            <div className="form-icon relative mt-2">
              <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
              <input
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                placeholder="Nombre :"
                id="nombre"
                name="nombre"
                required
              />
            </div>
          </div>
          <div>
            <label className="form-label font-medium">
              Apellido: <span className="text-red-600">*</span>
            </label>
            <div className="form-icon relative mt-2">
              <FiUserCheck className="w-4 h-4 absolute top-3 start-4"></FiUserCheck>
              <input
                type="text"
                value={formData.apellido}
                onChange={handleChange}
                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                placeholder="Apellido :"
                id="apellido"
                name="apellido"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="form-label font-medium">
            Correo electrónico: <span className="text-red-600">*</span>
          </label>
          <div className="form-icon relative mt-2">
            <FiMail className="w-4 h-4 absolute top-3 start-4"></FiMail>
            <input
              type="email"
              value={formData.correo}
              onChange={handleChange}
              className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
              placeholder="Correo Electrónico :"
              name="correo"
              required
            />
          </div>
        </div>
        <button
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
          onClick={handleSubmitPerfil} // Ejecutar directamente la función
        >
          {isLoadingUser ? (
            <Spinner className="mx-auto block" />
          ) : (
            "Guardar Cambios"
          )}
        </button>
      </div>

      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <h5 className="text-lg font-semibold mb-4">Cambiar Contraseña:</h5>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <div>
            <label className="form-label font-medium">Contraseña Actual: <span className="text-red-600">*</span></label>
            <div className="form-icon relative mt-2">
              <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
              <input
                name="currentPassword"
                type="password"
                value={formDataPassword.currentPassword}
                onChange={handlePasswordChange} // Este es el correcto
                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                placeholder="Contraseña Actual :"
                required
              />
            </div>
          </div>
          <div>
            <label className="form-label font-medium">Contraseña Nueva: <span className="text-red-600">*</span></label>
            <div className="form-icon relative mt-2">
              <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
              <input
                name="newPassword"
                type="password"
                value={formDataPassword.newPassword}
                onChange={handlePasswordChange} // Aquí también
                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                placeholder="Contraseña Nueva :"
                required
              />
            </div>
          </div>
        </div>
        <button
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
          onClick={handleSubmitPassword} // Ejecutar la función de cambiar contraseña
        >
          {isLoadingPassword ? (
            <Spinner className="mx-auto block" />
          ) : (
            "Cambiar Contraseña"
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
