import { Config } from "./Config";

const url = Config.api.local;

export const HttpUsuario = {
  ActualizarFotoPerfil: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaActualizarPerfilMedico = await fetch(
        `${url}actualizarFotoPerfil`,
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
  }
};
