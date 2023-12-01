import { rest } from "../config/axios";
import { NAVEGATION_FEED } from "../constants/navegation";

const useCreateUser = () => {
  const handlerCreateUser = async (body) => {
    try {
      const response = await rest.post("/register", {
        username: body.username,
        password: body.password,
      });

      localStorage.setItem("user", response.data.access_token);
      window.location.replace(NAVEGATION_FEED);
    } catch (err) {
      // TODO : Podriamos devolver una error que nos muestre un snackbar y asi informarle al usuario
      console.log(err);
    }
  };

  return {
    handlerCreateUser,
  };
};

export default useCreateUser;
