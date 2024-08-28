import { Link } from "react-router-dom";
import {
  FiUser,
  FiUserCheck,
  FiMail,
  FiBookmark,
  FiMessageCircle,
  FiPhone,
  FiGlobe,
  FiKey,
} from "../../assets/icons/vander";

export const VerificacionConfiguracion = () => {
  return (
    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <h5 className="text-lg font-semibold mb-4">Detalles personales:</h5>
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="form-label font-medium">
                Nombre: <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Nombre :"
                  id="firstname"
                  name="name"
                  required=""
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                Apellido : <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUserCheck className="w-4 h-4 absolute top-3 start-4"></FiUserCheck>
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Apellido :"
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="form-label font-medium">Phone No. :</label>
                  <div className="form-icon relative mt-2">
                    <FiPhone className="w-4 h-4 absolute top-3 start-4"></FiPhone>
                    <input
                      name="number"
                      id="number"
                      type="number"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Phone :"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">Website :</label>
                  <div className="form-icon relative mt-2">
                    <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                    <input
                      name="url"
                      id="url"
                      type="url"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Url :"
                    />
                  </div>
                </div>
              </div>

              <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5">
                Add
              </button>
            </form>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="form-label font-medium">
                    Old password :
                  </label>
                  <div className="form-icon relative mt-2">
                    <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                    <input
                      type="password"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Old password"
                      required=""
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">
                    New password :
                  </label>
                  <div className="form-icon relative mt-2">
                    <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                    <input
                      type="password"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="New password"
                      required=""
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">
                    Re-type New password :
                  </label>
                  <div className="form-icon relative mt-2">
                    <FiKey className="w-4 h-4 absolute top-3 start-4"></FiKey>
                    <input
                      type="password"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Re-type New password"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5">
                Save password
              </button>
            </form>
          </div>
        </div>
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
