import { rest } from "../config/axios";
import { NAVEGATION_FEED } from "../constants/navegation";
import { useSnackbar } from "react-simple-snackbar";

const useUserLogin = () => {
  const [openSnackbar] = useSnackbar();

  const handlerLoginUser = async (body) => {
    try {
      const response = await rest.post("/login", {
        username: body.username,
        password: body.password,
      });

      localStorage.setItem("user", response.data.access_token);
      window.location.replace(NAVEGATION_FEED);
    } catch (err) {
      // TODO : Podriamos devolver una error que nos muestre un snackbar y asi informarle al usuario
      openSnackbar(`Ups, ubo un error prueba mas tarde`);
    }
  };

  return {
    handlerLoginUser,
  };
};

export default useUserLogin;
