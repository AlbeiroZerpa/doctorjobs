import { Config } from "./Config";

const url = Config.api.local;

export const HttpUsuario = {
  ActualizarFotoPerfil: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaActualizarPerfilMedico = await fetch(
        `${url}actualizarFotoPerfil`,
        { method: "POST", body: data }
      );
      let resconsultaActualizarPerfilMedico = await consultaActualizarPerfilMedico.json();
      let consultaFinal = {
        status: consultaActualizarPerfilMedico.status,
        data: resconsultaActualizarPerfilMedico,
      };
      return consultaFinal;
    } catch (err) {
      return { error: "Error de servidor" };
    }
  },

  ActualizarPerfilMedico: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaActualizarPerfilMedico = await fetch(
        `${url}actualizarPerfil`,
        { method: "POST", headers: headers, body: JSON.stringify(data) }
      );
      let resconsultaActualizarPerfilMedico = await consultaActualizarPerfilMedico.json();
      let consultaFinal = {
        status: consultaActualizarPerfilMedico.status,
        data: resconsultaActualizarPerfilMedico,
      };
      return consultaFinal;
    } catch (err) {
      return { error: "Error de servidor" };
    }
  },

  CambiarPassword: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaCambiarPassword = await fetch(
        `${url}cambiarPassword`,
        { method: "POST", headers: headers, body: JSON.stringify(data) }
      );
      let resconsultaCambiarPassword = await consultaCambiarPassword.json();
      let consultaFinal = {
        status: consultaCambiarPassword.status,
        data: resconsultaCambiarPassword,
      };
      return consultaFinal;
    } catch (err) {
      return { error: "Error de servidor" };
    }
  },

  DatosVerificiacionMedico: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaActualizarPerfilMedico = await fetch(
        `${url}datosVerificiacion`,
        { method: "POST", body: data }
      );
      let resconsultaActualizarPerfilMedico = await consultaActualizarPerfilMedico.json();
      let consultaFinal = {
        status: consultaActualizarPerfilMedico.status,
        data: resconsultaActualizarPerfilMedico,
      };
      return consultaFinal;
    } catch (err) {
      return { error: "Error de servidor" };
    }
  },

};
