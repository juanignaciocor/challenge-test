import axios from "axios";

// TODO: Agregar una variable de entorno para que la instancia sea dinamica, tamiben podriamos crear una clase que genere una instancia con
// un interceptor , guarde el token y tambien loguee cada vez que hacemos un request

export const rest = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
  headers: { "Access-Control-Allow-Origin": "*" },
});
