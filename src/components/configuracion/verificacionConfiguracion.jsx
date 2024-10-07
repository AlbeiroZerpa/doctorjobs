import { useState } from "react";

import {
  FiUser,
  FiUserCheck,
  FiMail,
  FiPhone,
  FiGlobe,
  SiGooglemaps,
  MdOutlineMapsHomeWork,
  PiIdentificationCard,
  PiGenderIntersex,
  FiCalendar,
  FaUniversity,
  LiaBirthdayCakeSolid,
} from "../../assets/icons/vander";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

import useUserStore from "../../store/userStore";
import { HttpUsuario } from "../../apis/HttpUsuario";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VerificacionConfiguracion = () => {

  const { user, login } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    usuarioId: user.id,  
    nombre: user.nombre || "",
    apellido: user.apellido || "",
    correo: user.correo || "",
    telefono: user.telefono || "",
    pais: "Ecuador",  // valor predeterminado
    provincia: user.provincia || "",
    ciudad: user.ciudad || "",
    dni: user.dni || "",
    sexo: user.sexo || "",
    fecha_nacimiento: user.fecha_nacimiento || null, // Dejar null si es null
    foto_dni: user.foto_dni || null,  // Dejar null si es null
  });

  const [titulosMedicos, setTitulosMedicos] = useState([
    {
      year_recepcion: '',
      nombre_institucion: '',
      pais_institucion: '',
      numero_titulo: '',
      imagen_titulo: null,
    },
  ]);

// Función para actualizar el formData y reemplazar los valores null con una cadena vacía de forma dinámica
const handleInputChange = (e) => {
  const { name, value } = e.target;
  
  setFormData((prevState) => ({
    ...prevState,
    [name]: value !== null ? value : ""  // Si es null, lo convertimos en ""
  }));
};

// Si la fecha es null, mantenemos el valor null, de lo contrario lo actualizamos
const handleDateChangeNacimiento = (date) => {
  setFormData((prevState) => ({
    ...prevState,
    fecha_nacimiento: date || null  // Dejar null si no hay fecha seleccionada
  }));
};

// Manejo dinámico para la imagen del DNI
const handleFileChangeDni = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    foto_dni: e.target.files[0] || ""  // Dejar como "" si no hay imagen seleccionada
  }));
};


  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      sexo: e.target.value  // Actualiza el valor del sexo en el estado
    });
  };



  // Manejar el cambio en los inputs de cada título
  const handleInputsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTitulos = [...titulosMedicos];
    updatedTitulos[index][name] = value;
    setTitulosMedicos(updatedTitulos);
  };

  // Manejar el cambio del archivo de imagen del título
  const handleFileChange = (index, e) => {
    const updatedTitulos = [...titulosMedicos];
    updatedTitulos[index].imagen_titulo = e.target.files[0];
    setTitulosMedicos(updatedTitulos);
  };

  // Validar si el formulario actual está lleno
  const isCurrentFormComplete = (titulo) => {
    return (
      titulo.year_recepcion &&
      titulo.nombre_institucion &&
      titulo.pais_institucion &&
      titulo.numero_titulo &&
      titulo.imagen_titulo
    );
  };

  // Agregar un nuevo formulario para un nuevo título
  const addNewTitulo = () => {
    const lastTitulo = titulosMedicos[titulosMedicos.length - 1];

    if (isCurrentFormComplete(lastTitulo)) {
      setTitulosMedicos([
        ...titulosMedicos,
        {
          year_recepcion: '',
          nombre_institucion: '',
          pais_institucion: '',
          numero_titulo: '',
          imagen_titulo: null,
        },
      ]);
    } else {
      toast.error('Por favor, completa todos los campos del título actual antes de agregar uno nuevo.', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };


  const handleClick = () => {
    const data = new FormData();

    // Datos del usuario
    data.append('usuarioId', formData.usuarioId);
    data.append('nombre', formData.nombre);
    data.append('apellido', formData.apellido);
    data.append('correo', formData.correo);
    data.append('telefono', formData.telefono);
    data.append('pais', formData.pais);
    data.append('provincia', formData.provincia);
    data.append('ciudad', formData.ciudad);
    data.append('dni', formData.dni);
    data.append('sexo', formData.sexo);
    data.append('fecha_nacimiento', formData.fecha_nacimiento);

    // Foto del DNI
    if (formData.foto_dni) {
      data.append('foto_dni', formData.foto_dni);
    }

    // Convertir los títulos médicos a JSON y agregar al FormData
    data.append('titulos_medicos', JSON.stringify(titulosMedicos));

    // Títulos médicos
    titulosMedicos.forEach((titulo, index) => {
      data.append(`titulos_medicos[${index}][year_recepcion]`, titulo.year_recepcion);
      data.append(`titulos_medicos[${index}][nombre_institucion]`, titulo.nombre_institucion);
      data.append(`titulos_medicos[${index}][pais_institucion]`, titulo.pais_institucion);
      data.append(`titulos_medicos[${index}][numero_titulo]`, titulo.numero_titulo);

      if (titulo.imagen_titulo) {
        data.append(`imagen_titulo_${index}`, titulo.imagen_titulo); // Aquí asignamos el nombre de la imagen correctamente
      }
    });

    console.log(data)

    // Enviar el formulario
    HttpUsuario.DatosVerificiacionMedico(data)
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          login(response.data.usuario)
        }else{
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };



  return (
    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
      <h5 className="text-xl font-semibold mb-4">
        Formulario de Registro para Médicos:
      </h5>
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <h5 className="text-lg font-semibold mb-4">
          Sección 1: Información Personal
        </h5>
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="form-label font-medium">
                Nombres : <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Nombres :"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                Apellidos : <span className="text-red-600">*</span>
              </label>
              <div className="form-icon relative mt-2">
                <FiUserCheck className="w-4 h-4 absolute top-3 start-4"></FiUserCheck>
                <input
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Apellidos :"
                  id="apellido"
                  name="apellido"
                  required
                  value={formData.apellido}
                  onChange={handleInputChange}
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
                  name="correo"
                  required
                  value={formData.correo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Teléfono : </label>
              <div className="form-icon relative mt-2">
                <FiPhone className="w-4 h-4 absolute top-3 start-4"></FiPhone>
                <input
                  name="ntelefono"
                  required
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Teléfono :"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                País de residencia :
              </label>
              <div className="form-icon relative mt-2">
                <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                <div className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800">
                  Ecuador
                </div>
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Provincia : </label>
              <div className="form-icon relative mt-2">
                <SiGooglemaps className="w-4 h-4 absolute top-3 start-4"></SiGooglemaps>
                <input
                  name="provincia"
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Provincia :"
                  value={formData.provincia}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Ciudad :</label>
              <div className="form-icon relative mt-2">
                <MdOutlineMapsHomeWork className="w-4 h-4 absolute top-3 start-4"></MdOutlineMapsHomeWork>
                <input
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Ciudad :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">
                Número de Identificación :
              </label>
              <div className="form-icon relative mt-2">
                <PiIdentificationCard className="w-4 h-4 absolute top-3 start-4"></PiIdentificationCard>
                <input
                  value={formData.dni}
                  onChange={handleInputChange}
                  name="dni"
                  type="text"
                  className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  placeholder="Cédula/DNI/Pasaporte :"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Sexo :</label>
              <div className="mt-2">
                <div className="flex items-center">
                  <PiGenderIntersex className="w-4 h-4 mr-2"></PiGenderIntersex>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="mujer"
                      checked={formData.sexo === 'mujer'}
                      onChange={handleGenderChange}
                      className="mr-1"
                    />
                    Mujer
                  </label>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="hombre"
                      checked={formData.sexo === 'hombre'}
                      onChange={handleGenderChange}
                      className="mr-1"
                    />
                    Hombre
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="otro"
                      checked={formData.sexo === 'otro'}
                      onChange={handleGenderChange}
                      className="mr-1"
                    />
                    Otro
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Fecha de Cumpleaños
              </label>
              <div className="relative mt-2">
                <LiaBirthdayCakeSolid className="size-[18px] absolute top-[10px] start-3 z-50"></LiaBirthdayCakeSolid>
                <DatePicker
                  className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                  selected={formData.fecha_nacimiento}  // Valor seleccionado del DatePicker
                  onChange={handleDateChangeNacimiento}  // Función para manejar el cambio de fecha
                  wrapperClassName="w-full"
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Subir Cedula
              </label>
              <div className="relative mt-2">
                <input
                  onChange={handleFileChangeDni}
                  type="file"
                  className="text-sm text-stone-500
                  file:mr-5 file:py-1 file:px-3 file:border-[1px]
                  file:text-xs file:font-medium
                file:bg-stone-50 file:text-stone-700
                  hover:file:cursor-pointer hover:file:bg-blue-50
                hover:file:text-blue-700"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
        <h5 className="text-lg font-semibold mb-4">
          Sección 2: Titulo de Médico General
        </h5>
        <form>
          {titulosMedicos.map((titulo, index) => (
            <div key={index} className="grid grid-cols-1 gap-5 mb-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <label className="form-label font-medium">
                    Año de Graduación: <span className="text-red-600">*</span>
                  </label>
                  <div className="form-icon relative mt-2">
                    <FiCalendar className="w-4 h-4 absolute top-3 start-4"></FiCalendar>
                    <input
                      type="text"
                      name="year_recepcion"
                      maxLength="4"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Año de Graduación"
                      value={titulo.year_recepcion}
                      onChange={(e) => handleInputsChange(index, e)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">
                    Nombre de la Institución: <span className="text-red-600">*</span>
                  </label>
                  <div className="form-icon relative mt-2">
                    <FaUniversity className="w-4 h-4 absolute top-3 start-4"></FaUniversity>
                    <input
                      type="text"
                      name="nombre_institucion"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Nombre de la Institución"
                      value={titulo.nombre_institucion}
                      onChange={(e) => handleInputsChange(index, e)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">
                    País de Graduación: <span className="text-red-600">*</span>
                  </label>
                  <div className="form-icon relative mt-2">
                    <FiGlobe className="w-4 h-4 absolute top-3 start-4"></FiGlobe>
                    <input
                      type="text"
                      name="pais_institucion"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="País de Graduación"
                      value={titulo.pais_institucion}
                      onChange={(e) => handleInputsChange(index, e)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">
                    Número de registro MSP: <span className="text-red-600">*</span>
                  </label>
                  <div className="form-icon relative mt-2">
                    <PiIdentificationCard className="w-4 h-4 absolute top-3 start-4"></PiIdentificationCard>
                    <input
                      type="text"
                      name="numero_titulo"
                      className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Número de registro MSP"
                      value={titulo.numero_titulo}
                      onChange={(e) => handleInputsChange(index, e)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label font-medium">
                    Subir Título Médico General
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="file"
                      className="text-sm text-stone-500
                    file:mr-5 file:py-1 file:px-3 file:border-[1px]
                    file:text-xs file:font-medium
                    file:bg-stone-50 file:text-stone-700
                    hover:file:cursor-pointer hover:file:bg-blue-50
                    hover:file:text-blue-700"
                      onChange={(e) => handleFileChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addNewTitulo}
            className="py-2 px-5 mx-auto block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
          >
            + Añadir Nuevo Título
          </button>
        </form>
      </div>
      <button
        onClick={handleClick}
        className="py-2 px-5 mx-auto block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5"
      >
        {isLoading ? <Spinner className="mx-auto block" /> : "Enviar"}
      </button>
      <ToastContainer />
    </div>
  );
};
