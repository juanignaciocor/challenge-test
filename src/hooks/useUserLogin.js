import { rest } from "../config/axios";
import { NAVEGATION_FEED } from "../constants/navegation";
const userLogin = () => {
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
      console.log(err);
    }
  };

  return {
    handlerLoginUser,
  };
};

export default userLogin;
