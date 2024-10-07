import { Config } from "./Config";

const url = Config.api.local;

export const HttpAuth = {
  Registro: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaRegistro = await fetch(`${url}registrar`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      let resconsultaRegistro = await consultaRegistro.json();
      let consultaFinal = {
        status: consultaRegistro.status,
        data: resconsultaRegistro,
      };
      return consultaFinal;
    } catch (err) {
      return { error: "Error de servidor" };
    }
  },

  Loguear: async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      let consultaLogin = await fetch(`${url}login`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      let resconsultaLogin = await consultaLogin.json();
      let consultaFinal = {
        status: consultaLogin.status,
        data: resconsultaLogin,
      };
      return consultaFinal;
    } catch (err) {
      return { error: "Error de servidor" };
    }
  },
};
