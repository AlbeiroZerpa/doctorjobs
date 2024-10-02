import { useState } from "react";
import { FiUser, FiUserCheck, FiMail, FiKey } from "../../assets/icons/vander";
import useUserStore from "../../store/userStore";
import { HttpAuth } from "../../apis/HttpAuth";

export const PerfilConfiguracion = () => {
  const { user, login } = useUserStore();

  // Estado para almacenar los valores de los errores
  const [error, setError] = useState(null);

  // Estado para controlar si está cargando
  const [isLoading, setIsLoading] = useState(false);

  // Estado para almacenar los valores de los campos
  const [formData, setFormData] = useState({
    usuarioId: user.id,
    currentPassword: "",
    newPassword: "", // Opcional, si deseas cambiar la contraseña
    nombre: user.nombre,
    apellido: user.apellido,
    correo: user.correo, // CAMBIAR
  });

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

    HttpAuth.ActualizarPerfilMedico(formData).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert('Contraseña actualizada exitosamente');
        // Vacia los campos de contraseña
      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
      });
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
    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <h5 className="text-lg font-semibold mb-4">Detalles personales:</h5>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="form-label font-medium">
                Nombre: <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                <input
                  type="text"
                  value={user?.nombre || ""}
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Nombre :"
                  id="firstname"
                  name="name"
                  readOnly
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
                  value={user?.apellido || ""}
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Apellido :"
                  id="lastname"
                  name="lastname"
                  readOnly
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Contraseña Actual:</label>
              <div className="form-icon relative mt-2">
                <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                <input
                  name="currentPassword"
                  type="password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Contraseña :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Contraseña Nueva:</label>
              <div className="form-icon relative mt-2">
                <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                <input
                  name="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Contraseña :"
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
                  defaultValue={user?.correo || ""}
                  onChange={handleChange}
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Correo Electrónico :"
                  name="email"
                  required
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
    </div>
  );
};
